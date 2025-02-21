import { NeisConfig } from '../configs/';
import { NeisApiError } from '../errors/errors';
import { AcaInsTiInfoResponse } from '../types/responses/AcaInsTiInfo';
import { ClassInfoResponse } from '../types/responses/ClassInfo';
import { ElsTimetableResponse } from '../types/responses/ElsTimetable';
import { HisTimetableResponse } from '../types/responses/HisTimetable';
import { MealServiceDietInfoResponse } from '../types/responses/MealServiceDietInfo';
import { SchoolInfoResponse } from '../types/responses/SchoolInfo';
import { SchoolMajorinfoResponse } from '../types/responses/SchoolMajorinfo';
import { SchoolScheduleResponse } from '../types/responses/SchoolSchedule';
import { SchulAflcoinfoResponse } from '../types/responses/SchulAflcoinfo';
import { SpsTimetableResponse } from '../types/responses/SpsTimetable';
import { TiClrminfoResponse } from '../types/responses/TiClrminfo';
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

      if (!config.params.Key) {
        throw new Error('API key is required.');
      }

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

      const result = Object.values(data).flatMap((value) =>
        Object.values(value as object),
      )[1].row as T;
      return result;
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

  protected async fetchedAcaInsTiInfo(
    params: NeisConfig,
  ): Promise<AcaInsTiInfoResponse> {
    return this.get<AcaInsTiInfoResponse>('acaInsTiInfo', params);
  }

  protected async fetchedClassInfo(
    params: NeisConfig,
  ): Promise<ClassInfoResponse> {
    return this.get<ClassInfoResponse>('classInfo', params);
  }

  protected async fetchedElsTimetable(
    params: NeisConfig,
  ): Promise<ElsTimetableResponse> {
    return this.get<ElsTimetableResponse>('elsTimetable', params);
  }

  protected async fetchedHisTimetable(
    params: NeisConfig,
  ): Promise<HisTimetableResponse> {
    return this.get<HisTimetableResponse>('hisTimetable', params);
  }

  protected async fetchedMealServiceDietInfo(
    params: NeisConfig,
  ): Promise<MealServiceDietInfoResponse> {
    return this.get<MealServiceDietInfoResponse>('mealServiceDietInfo', params);
  }

  protected async fetchedMisTimetable(
    params: NeisConfig,
  ): Promise<HisTimetableResponse> {
    return this.get<HisTimetableResponse>('misTimetable', params);
  }

  protected async fetchedSchoolInfo(
    params: NeisConfig,
  ): Promise<SchoolInfoResponse> {
    return this.get<SchoolInfoResponse>('schoolInfo', params);
  }

  protected async fetchedSchoolMajorinfo(
    params: NeisConfig,
  ): Promise<SchoolMajorinfoResponse> {
    return this.get<SchoolMajorinfoResponse>('schoolMajorinfo', params);
  }

  protected async fetchedSchoolSchedule(
    params: NeisConfig,
  ): Promise<SchoolScheduleResponse> {
    return this.get<SchoolScheduleResponse>('SchoolSchedule', params);
  }

  protected async fetchedSchulAflcoinfo(
    params: NeisConfig,
  ): Promise<SchulAflcoinfoResponse> {
    return this.get<SchulAflcoinfoResponse>('schulAflcoinfo', params);
  }

  protected async fetchedSpsTimetable(
    params: NeisConfig,
  ): Promise<SpsTimetableResponse> {
    return this.get<SpsTimetableResponse>('spsTimetable', params);
  }

  protected async fetchedTiClrminfo(
    params: NeisConfig,
  ): Promise<TiClrminfoResponse> {
    return this.get<TiClrminfoResponse>('tiClrminfo', params);
  }
}
