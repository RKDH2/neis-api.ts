export type AcaInsTiInfoRequest = {
  /** 시도교육청코드 */
  ATPT_OFCDC_SC_CODE: string;
  /** 행정구역명 */
  ADMST_ZONE_NM?: string;
  /** 학원지정번호 */
  ACA_ASNUM?: string;
  /** 학원명 */
  ACA_NM?: string;
  /** 분야명 */
  REALM_SC_NM?: string;
  /** 교습계열명 */
  LE_ORD_NM?: string;
  /** 교습과정명 */
  LE_CRSE_NM?: string;
};
