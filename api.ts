import NeisApiService from './src';
import dotenv from 'dotenv';

dotenv.config();

const neis = new NeisApiService({
  key: process.env.NEIS_API_KEY,
});

neis
  .getSchoolInfo({ SCHUL_NM: '광성고등학교' })
  .then((res) => {
    console.log('API response:', res);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
