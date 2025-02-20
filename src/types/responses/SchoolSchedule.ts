export type SchoolScheduleResponse = {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string;
  /** 시도교육청명 */
  readonly ATPT_OFCDC_SC_NM?: string;
  /** 행정표준코드 */
  readonly SD_SCHUL_CODE: string;
  /** 학교명 */
  readonly SCHUL_NM: string;
  /** 학년도 */
  readonly AY: string;
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM: string;
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM: string;
  /** 수업공제일명 */
  readonly SBTR_DD_SC_NM: string;
  /** 학사일자 */
  readonly AA_YMD: string;
  /** 행사명 */
  readonly EVENT_NM: string;
  /** 행사내용 */
  readonly EVENT_CNTNT: string;
  /** 1학년 행사 여부 */
  readonly ONE_GRADE_EVENT_YN: string;
  /** 2학년 행사 여부 */
  readonly TW_GRADE_EVENT_YN: string;
  /** 3학년 행사 여부 */
  readonly THREE_GRADE_EVENT_YN: string;
  /** 4학년 행사 여부 */
  readonly FR_GRADE_EVENT_YN: string;
  /** 5학년 행사 여부 */
  readonly FIV_GRADE_EVENT_YN: string;
  /** 6학년 행사 여부 */
  readonly SIX_GRADE_EVENT_YN: string;
  /** 수정일자 */
  readonly LOAD_DTM: string;
};
