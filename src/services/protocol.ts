import { ResolvedNeisConfig } from '../configs/index';
import { NeisApiError, toNeisApiError } from '../errors/errors';
import axios, { AxiosInstance } from 'axios';

const NO_DATA_CODE = 'INFO-200';

type NeisResult = { CODE: string; MESSAGE: string };

const defaultTrackStats = (
  endpoint: string,
  responseTime: number,
  success?: boolean,
) => {
  const failed = success ? '' : ' | Request failed';
  console.log(
    `[API Http Stats - Endpoint: ${endpoint}${failed} | Response Time: ${responseTime}ms]`,
  );
};

const parseResponse = <T>(data: unknown): T => {
  if (!data || typeof data !== 'object') {
    throw new NeisApiError('Unexpected response format', 'INVALID_RESPONSE');
  }

  const body = data as Record<string, unknown>;
  const result = body.RESULT as NeisResult | undefined;

  if (result) {
    if (result.CODE === NO_DATA_CODE) {
      return [] as unknown as T;
    }
    throw new NeisApiError(result.MESSAGE, result.CODE);
  }

  const blocks = Object.values(body)[0];
  const rowBlock = Array.isArray(blocks)
    ? blocks.find(
        (block) => block && typeof block === 'object' && 'row' in block,
      )
    : undefined;

  if (!rowBlock) {
    throw new NeisApiError('Unexpected response format', 'INVALID_RESPONSE');
  }

  return rowBlock.row as T;
};

export class Protocol {
  private readonly rest: AxiosInstance;

  constructor(protected readonly config: ResolvedNeisConfig) {
    this.rest = axios.create({
      baseURL: 'https://open.neis.go.kr/hub',
      timeout: config.timeout,
    });
  }

  protected async get<TRes>(
    endpoint: string,
    params: object = {},
  ): Promise<TRes> {
    const startTime = Date.now();
    let result: TRes;

    try {
      result = await this.request<TRes>(endpoint, params);
    } catch (error) {
      const apiError =
        error instanceof NeisApiError ? error : toNeisApiError(error);

      this.track(endpoint, startTime, false);
      this.config.logger?.error(apiError);
      throw apiError;
    }

    this.track(endpoint, startTime, true);
    return result;
  }

  private async request<TRes>(endpoint: string, params: object): Promise<TRes> {
    this.config.logger?.debug(`GET /${endpoint}`, params);
    let data: unknown;

    try {
      const response = await this.rest.get(endpoint, {
        params: {
          Key: this.config.key,
          Type: this.config.type,
          pIndex: this.config.pIndex,
          pSize: this.config.pSize,
          ...params,
        },
      });
      data = response.data;
    } catch (error) {
      throw toNeisApiError(error);
    }

    return parseResponse<TRes>(data);
  }

  private track(endpoint: string, startTime: number, success: boolean) {
    if (!this.config.stats) return;

    const trackStats = this.config.trackStats ?? defaultTrackStats;
    trackStats(endpoint, Date.now() - startTime, success);
  }
}
