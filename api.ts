import { NeisApiService } from './src/index';
import dotenv from 'dotenv';

dotenv.config();

const neis = new NeisApiService({
  key: process.env.NEIS_API_KEY,
  pSize: 3,
  stats: true,
});

const fetch = async () => {
  try {
    const response = await neis.getSchoolMajorinfo({
      ATPT_OFCDC_SC_CODE: 'T10',
    });
    console.log('API response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
};

fetch();
