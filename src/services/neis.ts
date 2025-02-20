import { NeisConfig, createNeisConfig } from '../../configs';
import { AcaInsTiInfoRequest } from '../types/requests/AcaInsTiInfo';
import { ClassInfoRequest } from '../types/requests/ClassInfo';
import { ElsTimetableRequest } from '../types/requests/ElsTimetable';
import { HisTimetableRequest } from '../types/requests/HisTimetable';
import { MealServiceDietInfoRequest } from '../types/requests/MealServiceDietInfo';
import { MisTimetableRequest } from '../types/requests/MisTimetable';
import { SchoolInfoRequest } from '../types/requests/SchoolInfo';
import { SchoolMajorinfoRequest } from '../types/requests/SchoolMajorinfo';
import { SchoolScheduleRequest } from '../types/requests/SchoolSchedule';
import { SchulAflcoinfoRequest } from '../types/requests/SchulAflcoinfo';
import { SpsTimetableRequest } from '../types/requests/SpsTimetable';
import { TiClrminfoRequest } from '../types/requests/TiClrminfo';
import { AcaInsTiInfoResponse } from '../types/responses/AcaInsTiInfo';
import { ClassInfoResponse } from '../types/responses/ClassInfo';
import { ElsTimetableResponse } from '../types/responses/ElsTimetable';
import { HisTimetableResponse } from '../types/responses/HisTimetable';
import { MealServiceDietInfoResponse } from '../types/responses/MealServiceDietInfo';
import { MisTimetableResponse } from '../types/responses/MisTimetable';
import { SchoolInfoResponse } from '../types/responses/SchoolInfo';
import { SchoolMajorinfoResponse } from '../types/responses/SchoolMajorinfo';
import { SchoolScheduleResponse } from '../types/responses/SchoolSchedule';
import { SchulAflcoinfoResponse } from '../types/responses/SchulAflcoinfo';
import { SpsTimetableResponse } from '../types/responses/SpsTimetable';
import { TiClrminfoResponse } from '../types/responses/TiClrminfo';
import { Protocol } from './protocol';

export class NeisApiService extends Protocol {
  constructor(config: Partial<NeisConfig> = {}) {
    super(createNeisConfig(config));
  }

  private async fetchData<T>(
    endpoint: string,
    params: Record<string, unknown>,
  ): Promise<T> {
    return this.get<T>(endpoint, params);
  }

  async getAcaInsTiInfo(params: AcaInsTiInfoRequest) {
    return this.fetchData<AcaInsTiInfoResponse>('acaInsTiInfo', params);
  }

  async getClassInfo(params: ClassInfoRequest) {
    return this.fetchData<ClassInfoResponse>('classInfo', params);
  }

  async getElsTimetable(params: ElsTimetableRequest) {
    return this.fetchData<ElsTimetableResponse>('elsTimetable', params);
  }

  async getHisTimetable(params: HisTimetableRequest) {
    return this.fetchData<HisTimetableResponse>('hisTimetable', params);
  }

  async getMealServiceDietInfo(params: MealServiceDietInfoRequest) {
    return this.fetchData<MealServiceDietInfoResponse>(
      'mealServiceDietInfo',
      params,
    );
  }

  async getMisTimetable(params: MisTimetableRequest) {
    return this.fetchData<MisTimetableResponse>('misTimetable', params);
  }

  async getSchoolInfo(params: SchoolInfoRequest) {
    return this.fetchData<SchoolInfoResponse>('schoolInfo', params);
  }

  async getSchoolMajorinfo(params: SchoolMajorinfoRequest) {
    return this.fetchData<SchoolMajorinfoResponse>('schoolMajorinfo', params);
  }

  async getSchoolSchedule(params: SchoolScheduleRequest) {
    return this.fetchData<SchoolScheduleResponse>('SchoolSchedule', params);
  }

  async getSchulAflcoinfo(params: SchulAflcoinfoRequest) {
    return this.fetchData<SchulAflcoinfoResponse>('schulAflcoinfo', params);
  }

  async getSpsTimetable(params: SpsTimetableRequest) {
    return this.fetchData<SpsTimetableResponse>('spsTimetable', params);
  }

  async getTiClrminfo(params: TiClrminfoRequest) {
    return this.fetchData<TiClrminfoResponse>('tiClrminfo', params);
  }
}
