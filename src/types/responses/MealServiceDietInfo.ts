export type MealServiceDietInfoResponse = {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string;
  /** 시도교육청명 */
  readonly ATPT_OFCDC_SC_NM: string;
  /** 행정표준코드 */
  readonly SD_SCHUL_CODE: string;
  /** 학교명 */
  readonly SCHUL_NM: string;
  /** 식사코드 */
  readonly MMEAL_SC_CODE: string;
  /** 식사명 */
  readonly MMEAL_SC_NM: string;
  /** 급식일자 */
  readonly MLSV_YMD: string;
  /** 급식인원수 */
  readonly MLSV_FGR: string;
  /** 요리명 */
  readonly DDISH_NM: string;
  /** 원산지정보 */
  readonly ORPLC_INFO: string;
  /** 칼로리정보 */
  readonly CAL_INFO: string;
  /** 영양정보 */
  readonly NTR_INFO: string;
  /** 급식시작일자 */
  readonly MLSV_FROM_YMD: string;
  /** 급식종료일자 */
  readonly MLSV_TO_YMD: string;
  /** 수정일자 */
  readonly LOAD_DTM: string;
};
