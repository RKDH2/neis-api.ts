import NeisApiService from './src';
import dotenv from 'dotenv';

dotenv.config();

const neis = new NeisApiService({
  key: process.env.NEIS_API_KEY,
  pSize: '10',
});

neis
  .getSchoolInfo({ ATPT_OFCDC_SC_CODE: 'T10' })
  .then((res) => {
    console.log('API response:', res);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
