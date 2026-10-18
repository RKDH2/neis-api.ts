import axios from 'axios';

export class NeisApiError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = 'NeisApiError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/** Axios 에러를 키가 포함되지 않은 NeisApiError로 변환한다. */
export const toNeisApiError = (error: unknown): NeisApiError => {
  if (!axios.isAxiosError(error)) {
    return new NeisApiError('Unknown error', 'UNKNOWN');
  }

  if (error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT') {
    return new NeisApiError('Request timeout exceeded.', 'TIMEOUT');
  }

  const status = error.response?.status;
  if (status) {
    return new NeisApiError(
      `NEIS responded with HTTP ${status}`,
      'HTTP_ERROR',
      status,
    );
  }

  return new NeisApiError('Network error', 'NETWORK_ERROR');
};
