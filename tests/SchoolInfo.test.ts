import { NeisApiService } from '../src/services/neis';

jest.mock('../src/services/neis', () => {
  return {
    NeisApiService: jest.fn().mockImplementation(() => ({
      getSchoolInfo: jest
        .fn()
        .mockResolvedValue([{ ATPT_OFCDC_SC_CODE: 'B10' }]),
    })),
  };
});

const neis = new NeisApiService();

describe('SchoolInfo', () => {
  it('Return SchoolInfoResponse', async () => {
    await expect(
      neis.getSchoolInfo({
        ATPT_OFCDC_SC_CODE: 'B10',
      }),
    ).resolves.toEqual([{ ATPT_OFCDC_SC_CODE: 'B10' }]);
  });
});
