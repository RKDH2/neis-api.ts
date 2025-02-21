import { NeisConfig, createNeisConfig } from '../configs';
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
  constructor(config: NeisConfig = {}) {
    super(createNeisConfig(config));
  }

  async getAcaInsTiInfo(
    params: AcaInsTiInfoRequest,
  ): Promise<AcaInsTiInfoResponse> {
    return this.fetchedAcaInsTiInfo({ ...this.params, ...params });
  }

  async getClassInfo(params: ClassInfoRequest): Promise<ClassInfoResponse> {
    return this.fetchedClassInfo({ ...this.params, ...params });
  }

  async getElsTimetable(
    params: ElsTimetableRequest,
  ): Promise<ElsTimetableResponse> {
    return this.fetchedElsTimetable({ ...this.params, ...params });
  }

  async getHisTimetable(
    params: HisTimetableRequest,
  ): Promise<HisTimetableResponse> {
    return this.fetchedHisTimetable({ ...this.params, ...params });
  }

  async getMealServiceDietInfo(
    params: MealServiceDietInfoRequest,
  ): Promise<MealServiceDietInfoResponse> {
    return this.fetchedMealServiceDietInfo({ ...this.params, ...params });
  }

  async getMisTimetable(
    params: MisTimetableRequest,
  ): Promise<MisTimetableResponse> {
    return this.fetchedMisTimetable({ ...this.params, ...params });
  }

  async getSchoolInfo(params: SchoolInfoRequest): Promise<SchoolInfoResponse> {
    return this.fetchedSchoolInfo({ ...this.params, ...params });
  }

  async getSchoolMajorinfo(
    params: SchoolMajorinfoRequest,
  ): Promise<SchoolMajorinfoResponse> {
    return this.fetchedSchoolMajorinfo({ ...this.params, ...params });
  }

  async getSchoolSchedule(
    params: SchoolScheduleRequest,
  ): Promise<SchoolScheduleResponse> {
    return this.fetchedSchoolSchedule({ ...this.params, ...params });
  }

  async getSchulAflcoinfo(
    params: SchulAflcoinfoRequest,
  ): Promise<SchulAflcoinfoResponse> {
    return this.fetchedSchulAflcoinfo({ ...this.params, ...params });
  }

  async getSpsTimetable(
    params: SpsTimetableRequest,
  ): Promise<SpsTimetableResponse> {
    return this.fetchedSpsTimetable({ ...this.params, ...params });
  }

  async getTiClrminfo(params: TiClrminfoRequest): Promise<TiClrminfoResponse> {
    return this.fetchedTiClrminfo({ ...this.params, ...params });
  }
}
