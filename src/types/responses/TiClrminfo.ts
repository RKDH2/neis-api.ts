export type TiClrminfoResponse = {
  /** 시도교육청코드 (필수) */
  readonly ATPT_OFCDC_SC_CODE: string;
  /** 시도교육청명 (필수) */
  readonly ATPT_OFCDC_SC_NM: string;
  /** 행정표준코드 (필수) */
  readonly SD_SCHUL_CODE: string;
  /** 학교명 (필수) */
  readonly SCHUL_NM: string;
  /** 학년도 (선택) */
  readonly AY: string;
  /** 학년 (선택) */
  readonly GRADE: string;
  /** 학기 (선택) */
  readonly SEM: string;
  /** 학교과정명 (선택) */
  readonly SCHUL_CRSE_SC_NM: string;
  /** 주야과정명 (선택) */
  readonly DGHT_CRSE_SC_NM: string;
  /** 계열명 (선택) */
  readonly ORD_SC_NM: string;
  /** 학과명 (선택) */
  readonly DDDEP_NM: string;
  /** 강의실명 (선택) */
  readonly CLRM_NM: string;
  /** 수정일자 (필수) */
  readonly LOAD_DTM: string;
};
