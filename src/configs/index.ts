export type NeisConfig = {
  key?: string;
  type?: 'json' | 'xml';
  pIndex?: string;
  pSize?: string;
  timeout?: number;
};

export const createNeisConfig = (
  config: Partial<NeisConfig> = {},
): NeisConfig => {
  if (!config.key) {
    throw new Error('API key is required.');
  }

  return {
    key: config.key,
    type: 'json',
    pIndex: '1',
    pSize: '1',
    timeout: 5000,
    ...config,
  };
};
