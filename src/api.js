import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/';

const api = axios.create({
  baseURL: baseURL,
});

export default api;