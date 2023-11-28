import axios from 'axios';

export const ApiManager = axios.create({
  baseURL: 'http://localhost:1414/api',
  responseType: 'json',
  withCredentials: true,
});
