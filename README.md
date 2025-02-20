# neis-api.ts
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square) ![npm](https://img.shields.io/npm/v/neis-api.ts?style=flat-square)

NEIS OPEN API를 쉽게 사용할 수 있는 API Wrapper 라이브러리 입니다.

## 설치 방법 (npm, yarn, pnpm)
```
npm install neis-api.ts
yarn add neis-api.ts
pnpm add neis-api.ts
```

## 엔드포인트 (12가지)
* AcaInsTiInfo
* ClassInfo
* ElsTimetable
* HisTimetable
* MealServiceDietInfo
* MisTimetable
* SchoolInfo
* SchoolMajorinfo
* SchoolSchedule
* SchulAflcoinfo
* SpsTimetable
* TiClrminfo

## 사용 방법 (예시)
```ts
import NeisApi from "neis-api.ts";

const neis = new NeisApi({
  key: NEIS_API_KEY,
});

const fetch = async () => {
  try {
    const response = await neis.getSchoolInfo({
      ATPT_OFCDC_SC_CODE: "시도교육청코드",
      SD_SCHUL_CODE: "행정표준코드",
    });
    console.log("API response:", response);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetch();
```

### NEIS API 문서 및 정보 출처 링크
* https://open.neis.go.kr/portal/mainPage.do
