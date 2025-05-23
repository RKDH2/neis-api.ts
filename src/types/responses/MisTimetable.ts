export type MisTimetableResponse = {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string;
  /** 시도교육청명 */
  readonly ATPT_OFCDC_SC_NM: string;
  /** 행정표준코드 */
  readonly SD_SCHUL_CODE: string;
  /** 학교명 */
  readonly SCHUL_NM: string;
  /** 학년도 */
  readonly AY: string;
  /** 학기 */
  readonly SEM: string;
  /** 시간표일자 */
  readonly ALL_TI_YMD: string;
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM: string;
  /** 학년 */
  readonly GRADE: string;
  /** 학급명 */
  readonly CLASS_NM: string;
  /** 교시 */
  readonly PERIO: string;
  /** 수업내용 */
  readonly ITRT_CNTNT: string;
  /** 수정일자 */
  readonly LOAD_DTM: string;
};
