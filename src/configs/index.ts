import type { Logger } from 'tslog';

export type NeisConfig = {
  key?: string;
  /** NEIS는 xml도 제공하지만, 이 라이브러리는 json 응답만 파싱한다. */
  type?: 'json';
  pIndex?: number;
  pSize?: number;
  timeout?: number;
  stats?: boolean;
  trackStats?: (
    endpoint: string,
    responseTime: number,
    success?: boolean,
  ) => void;
  logger?: Logger<unknown>;
};

export type ResolvedNeisConfig = NeisConfig & {
  key: string;
  type: 'json';
  pIndex: number;
  pSize: number;
  timeout: number;
  stats: boolean;
};

export const createNeisConfig = (
  config: NeisConfig = {},
): ResolvedNeisConfig => {
  if (!config.key) {
    throw new Error('API key is required.');
  }

  if ((config.type as string | undefined) === 'xml') {
    throw new Error("type 'xml' is not supported. Only 'json' is available.");
  }

  return {
    key: config.key,
    type: 'json',
    pIndex: config.pIndex || 1,
    pSize: config.pSize || 100,
    timeout: config.timeout || 5000,
    stats: config.stats ?? false,
    trackStats: config.trackStats,
    logger: config.logger,
  };
};
