export type MealServiceDietInfoRequest = {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string;
  /** 행정표준코드 */
  readonly SD_SCHUL_CODE: string;
  /** 식사코드 */
  readonly MMEAL_SC_CODE?: string;
  /** 급식일자 */
  readonly MLSV_YMD?: string;
  /** 급식시작일자 */
  readonly MLSV_FROM_YMD?: string;
  /** 급식종료일자 */
  readonly MLSV_TO_YMD?: string;
};
