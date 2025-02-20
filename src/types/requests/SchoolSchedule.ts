export type SchoolScheduleRequest = {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string;
  /** 행정표준코드 */
  readonly SD_SCHUL_CODE: string;
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM?: string;
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM?: string;
  /** 학사일자 */
  readonly AA_YMD?: string;
  /** 학사시작일자 */
  readonly AA_FROM_YMD?: string;
  /** 학사종료일자 */
  readonly AA_TO_YMD?: string;
};
