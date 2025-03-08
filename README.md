# neis-api.ts
![License](https://img.shields.io/badge/License-MIT-blue.svg?color=green) ![npm](https://img.shields.io/npm/v/neis-api.ts?color=orange)

NEIS OPEN API를 쉽게 사용할 수 있는 API Wrapper 라이브러리 입니다.

## 새로운 기능 (Version =>1.7.0)
**stats**를 사용하여 **API의 HTTP 요청/응답**에 대한 통계를 간략하게 확인할 수 있다.

사용자 선택에 따라 적용하거나 적용하지 않아도 된다.
```ts
const neis = new NeisApi({
  key: NEIS_API_KEY,
  stats: true, <-- true를 사용해 활성화
});

// [API Http Stats - Endpoint: schoolInfo | Response Time: 251ms] <-- API 호출 및 응답 시간 출력 기능
```

## 설치 방법 (npm, yarn, pnpm)
```
npm install neis-api.ts
yarn add neis-api.ts
pnpm add neis-api.ts
```

## 엔드포인트 (12가지)
* [AcaInsTiInfo (학원교습소정보)](https://github.com/RKDH2/neis-api.ts/blob/main/src/types/requests/AcaInsTiInfo.ts)
* [ClassInfo (학급정보)](https://github.com/RKDH2/neis-api.ts/blob/main/src/types/requests/ClassInfo.ts)
* [ElsTimetable (초등학교시간표)](https://github.com/RKDH2/neis-api.ts/blob/main/src/types/requests/ElsTimetable.ts)
* [HisTimetable (고등학교시간표)](https://github.com/RKDH2/neis-api.ts/blob/main/src/types/requests/HisTimetable.ts)
* [MealServiceDietInfo (급식식단정보)](https://github.com/RKDH2/neis-api.ts/blob/main/src/types/requests/MealServiceDietInfo.ts)
* [MisTimetable (중학교시간표)](https://github.com/RKDH2/neis-api.ts/blob/main/src/types/requests/MisTimetable.ts)
* [SchoolInfo (학교기본정보)](https://github.com/RKDH2/neis-api.ts/blob/main/src/types/requests/SchoolInfo.ts)
* [SchoolMajorinfo (학교학과정보)](https://github.com/RKDH2/neis-api.ts/blob/main/src/types/requests/SchoolMajorinfo.ts)
* [SchoolSchedule (학사일정)](https://github.com/RKDH2/neis-api.ts/blob/main/src/types/requests/SchoolSchedule.ts)
* [SchulAflcoinfo (학교계열정보)](https://github.com/RKDH2/neis-api.ts/blob/main/src/types/requests/SchulAflcoinfo.ts)
* [SpsTimetable (특수학교시간표)](https://github.com/RKDH2/neis-api.ts/blob/main/src/types/requests/SpsTimetable.ts)
* [TiClrminfo (시간표강의실정보)](https://github.com/RKDH2/neis-api.ts/blob/main/src/types/requests/TiClrminfo.ts)

## 기본인자
|변수명|타입|변수 설명|설명|
|-----|-----|-----|-----|
|key|STRING(필수)|인증키|기본값 : ❌|
|type|STRING(선택)|호출 문서(xml, json)|기본값 : json|
|pIndex|INTEGER(선택)|페이지 위치|기본값 : 1|
|pSize|INTEGER(선택)|페이지 당 신청 숫자|기본값 : 100|
|stats|BOOLEAN(선택)|API 호출/응답 시간|기본값 : false|

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

***

### NEIS API 문서 및 정보 출처 링크
* https://open.neis.go.kr/portal/mainPage.do
