export type NeisConfig = {
  key?: string;
  type?: 'json' | 'xml';
  pIndex?: string;
  pSize?: string;
  timeout?: number;
};

export const createNeisConfig = (
  config: Partial<NeisConfig> = {},
): NeisConfig => ({
  key: '',
  type: 'json',
  pIndex: '1',
  pSize: '1',
  timeout: 5000,
  ...config,
});
