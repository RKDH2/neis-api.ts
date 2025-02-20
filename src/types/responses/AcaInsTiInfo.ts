export type AcaInsTiInfoResponse = {
  /** 시도교육청코드 */
  ATPT_OFCDC_SC_CODE: string;

  /** 시도교육청명 */
  ATPT_OFCDC_SC_NM: string;

  /** 행정구역명 */
  ADMST_ZONE_NM: string;

  /** 학원교습소명 */
  ACA_INSTI_SC_NM: string;

  /** 학원지정번호 */
  ACA_ASNUM: string;

  /** 학원명 */
  ACA_NM: string;

  /** 개설일자 */
  ESTBL_YMD: string;

  /** 등록일자 */
  REG_YMD: string;

  /** 등록상태명 */
  REG_STTUS_NM: string;

  /** 휴원시작일자 */
  CAA_BEGIN_YMD: string;

  /** 휴원종료일자 */
  CAA_END_YMD: string;

  /** 정원합계 */
  TOFOR_SMTOT: number;

  /** 일시수용능력인원합계 */
  DTM_RCPTN_ABLTY_NMPR_SMTOT: number;

  /** 분야명 */
  REALM_SC_NM: string;

  /** 교습계열명 */
  LE_ORD_NM: string;

  /** 교습과정목록명 */
  LE_CRSE_LIST_NM: string;

  /** 교습과정명 */
  LE_CRSE_NM: string;

  /** 인당수강료 */
  PSNBY_THCC_CNTNT: number;

  /** 수강료공개여부 */
  THCC_OTHBC_YN: string;

  /** 기숙사학원여부 */
  BRHS_ACA_YN: string;

  /** 도로명주소 */
  FA_RDNMA: string;

  /** 도로명상세주소 */
  FA_RDNDA: string;

  /** 도로명우편번호 */
  FA_RDNZC: string;

  /** 전화번호 */
  FA_TELNO: string;

  /** 수정일자 */
  LOAD_DTM: string;
};
