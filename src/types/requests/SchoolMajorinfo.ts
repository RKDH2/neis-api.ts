export type SchoolMajorinfoRequest = {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string;
  /** 행정표준코드 */
  readonly SD_SCHUL_CODE?: string;
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM?: string;
  /** 계열명 */
  readonly ORD_SC_NM?: string;
};
