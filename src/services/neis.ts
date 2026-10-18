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

  /** 학원교습소정보 (acaInsTiInfo) */
  async getAcaInsTiInfo(
    params: AcaInsTiInfoRequest,
  ): Promise<AcaInsTiInfoResponse> {
    return this.get<AcaInsTiInfoResponse>('acaInsTiInfo', params);
  }

  /** 학급정보 (classInfo) */
  async getClassInfo(params: ClassInfoRequest): Promise<ClassInfoResponse> {
    return this.get<ClassInfoResponse>('classInfo', params);
  }

  /** 초등학교 시간표 (elsTimetable) */
  async getElsTimetable(
    params: ElsTimetableRequest,
  ): Promise<ElsTimetableResponse> {
    return this.get<ElsTimetableResponse>('elsTimetable', params);
  }

  /** 고등학교 시간표 (hisTimetable) */
  async getHisTimetable(
    params: HisTimetableRequest,
  ): Promise<HisTimetableResponse> {
    return this.get<HisTimetableResponse>('hisTimetable', params);
  }

  /** 급식식단정보 (mealServiceDietInfo) */
  async getMealServiceDietInfo(
    params: MealServiceDietInfoRequest,
  ): Promise<MealServiceDietInfoResponse> {
    return this.get<MealServiceDietInfoResponse>('mealServiceDietInfo', params);
  }

  /** 중학교 시간표 (misTimetable) */
  async getMisTimetable(
    params: MisTimetableRequest,
  ): Promise<MisTimetableResponse> {
    return this.get<MisTimetableResponse>('misTimetable', params);
  }

  /** 학교기본정보 (schoolInfo) */
  async getSchoolInfo(params: SchoolInfoRequest): Promise<SchoolInfoResponse> {
    return this.get<SchoolInfoResponse>('schoolInfo', params);
  }

  /** 학과정보 (schoolMajorinfo) */
  async getSchoolMajorinfo(
    params: SchoolMajorinfoRequest,
  ): Promise<SchoolMajorinfoResponse> {
    return this.get<SchoolMajorinfoResponse>('schoolMajorinfo', params);
  }

  /** 학사일정 (SchoolSchedule: 엔드포인트명은 대문자 S로 시작) */
  async getSchoolSchedule(
    params: SchoolScheduleRequest,
  ): Promise<SchoolScheduleResponse> {
    return this.get<SchoolScheduleResponse>('SchoolSchedule', params);
  }

  /** 학교계열정보 (schulAflcoinfo) */
  async getSchulAflcoinfo(
    params: SchulAflcoinfoRequest,
  ): Promise<SchulAflcoinfoResponse> {
    return this.get<SchulAflcoinfoResponse>('schulAflcoinfo', params);
  }

  /** 특수학교 시간표 (spsTimetable) */
  async getSpsTimetable(
    params: SpsTimetableRequest,
  ): Promise<SpsTimetableResponse> {
    return this.get<SpsTimetableResponse>('spsTimetable', params);
  }

  /** 강의실정보 (tiClrminfo) */
  async getTiClrminfo(params: TiClrminfoRequest): Promise<TiClrminfoResponse> {
    return this.get<TiClrminfoResponse>('tiClrminfo', params);
  }
}
