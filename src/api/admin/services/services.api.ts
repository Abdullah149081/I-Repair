import axios from 'axios';
import { URL } from '@/config/config';

export const getServices = async () => {
  const response = await axios.get(`${URL}/services`);
  return response.data;
};
