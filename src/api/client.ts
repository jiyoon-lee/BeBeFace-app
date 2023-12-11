import axios from 'axios';

const baseURL = __DEV__ ? 'http://localhost:3000' : 'http://192.168.0.19:3000';

const client = axios.create({
  baseURL,
});

export function applyToken(jwt: string) {
  client.defaults.headers.Authorization = `Bearer ${jwt}`;
}

export function clearToken() {
  client.defaults.headers.Authorization = null;
}

export default client;
