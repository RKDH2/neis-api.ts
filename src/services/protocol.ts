import { NeisConfig } from '../configs/index';
import { NeisApiError } from '../errors/errors';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class Protocol {
  private readonly rest: AxiosInstance;
  private readonly baseUrl = 'https://open.neis.go.kr/hub';

  constructor(protected readonly params: NeisConfig) {
    this.rest = axios.create({
      baseURL: this.baseUrl,
      timeout: params.timeout || 5000,
    });

    this.rest.interceptors.request.use((config) => {
      config.params = {
        Key: params.key,
        Type: params.type,
        pIndex: params.pIndex,
        pSize: params.pSize,
        ...config.params,
      };

      return config;
    });

    this.rest.interceptors.response.use(
      (response) => response,
      (error) => {
        NeisApiError.handle(error);
        return Promise.reject(error);
      },
    );
  }

  private async proccesData<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const { data } = await this.rest.request(config);

      if (data.RESULT) {
        const error = new Error(
          `Code: ${data.RESULT.CODE} \n Message: ${data.RESULT.MESSAGE}`,
        );
        throw error;
      }

      const typedData = data as { [key: string]: { row: T[] }[] };
      return Object.values(typedData)[0][1]?.row[0];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          console.error('Request timeout exceeded.', error);
          throw new Error('Request timeout exceeded.');
        }
      }
      console.error('API call failed', error);
      throw error;
    }
  }

  protected async get<T>(endpoint: string, params: NeisConfig): Promise<T> {
    const config: AxiosRequestConfig = {
      url: endpoint,
      method: 'GET',
      params,
      timeout: params.timeout || this.params.timeout,
    };
    return this.proccesData<T>(config);
  }
}
