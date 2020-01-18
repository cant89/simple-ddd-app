import axios from 'axios';

const instance = axios.create({
  baseURL: API_BASE_URL.CUSTOMERS
});

export default instance;
