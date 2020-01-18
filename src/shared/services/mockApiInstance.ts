import axios from 'axios';

const instance = axios.create({
  baseURL: API_BASE_URL.MOCKAPI
});

export default instance;
