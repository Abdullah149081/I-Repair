import { URL } from '@/config/config';
import axios from 'axios';

export const getServices = async () => {
  const response = await axios.get(`${URL}/services`);
  return response.data;
};
