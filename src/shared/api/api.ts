import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';

export const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'real_domen';

export const $api = axios.create({
  baseURL: baseUrl,
  headers: {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
  },
});
