export type SpsTimetableRequest = {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string;
  /** 행정표준코드 */
  readonly SD_SCHUL_CODE: string;
  /** 학년도 */
  readonly AY?: string;
  /** 학기 */
  readonly SEM?: string;
  /** 시간표일자 */
  readonly ALL_TI_YMD?: string;
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM?: string;
  /** 학년 */
  readonly GRADE?: string;
  /** 강의실명 */
  readonly CLRM_NM?: string;
  /** 학급명 */
  readonly CLASS_NM?: string;
  /** 교시 */
  readonly PERIO?: string;
  /** 시간표시작일자 */
  readonly TI_FROM_YMD?: string;
  /** 시간표종료일자 */
  readonly TI_TO_YMD?: string;
};
