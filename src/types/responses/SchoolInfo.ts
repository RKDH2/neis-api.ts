export type SchoolInfoResponse = {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string;
  /** 시도교육청명 */
  readonly ATPT_OFCDC_SC_NM: string;
  /** 행정표준코드 */
  readonly SD_SCHUL_CODE: string;
  /** 학교명 */
  readonly SCHUL_NM: string;
  /** 영문학교명 */
  readonly ENG_SCHUL_NM: string;
  /** 학교종류명 */
  readonly SCHUL_KND_SC_NM: string;
  /** 시도명 */
  readonly LCTN_SC_NM: string;
  /** 관할조직명 */
  readonly JU_ORG_NM: string;
  /** 설립명 */
  readonly FOND_SC_NM: string;
  /** 도로명우편번호 */
  readonly ORG_RDNZC: string;
  /** 도로명주소 */
  readonly ORG_RDNMA: string;
  /** 도로명상세주소 */
  readonly ORG_RDNDA: string;
  /** 전화번호 */
  readonly ORG_TELNO: string;
  /** 홈페이지주소 */
  readonly HMPG_ADRES: string;
  /** 남녀공학구분명 */
  readonly COEDU_SC_NM: string;
  /** 팩스번호 */
  readonly ORG_FAXNO: string;
  /** 고등학교구분명 */
  readonly HS_SC_NM: string;
  /** 산업체특별학급존재여부 */
  readonly INDST_SPECL_CCCCL_EXST_YN: string;
  /** 고등학교일반전문구분명 */
  readonly HS_GNRL_BUSNS_SC_NM: string;
  /** 특수목적고등학교계열명 */
  readonly SPCLY_PURPS_HS_ORD_NM: string;
  /** 입시전후기구분명 */
  readonly ENE_BFE_SEHF_SC_NM: string;
  /** 주야구분명 */
  readonly DGHT_SC_NM: string;
  /** 설립일자 */
  readonly FOND_YMD: string;
  /** 개교기념일 */
  readonly FOAS_MEMRD: string;
  /** 수정일자 */
  readonly LOAD_DTM: string;
};
