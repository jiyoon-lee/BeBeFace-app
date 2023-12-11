import axios from 'axios';

// const baseURL = __DEV__ ? 'http://localhost:3000' : 'http://192.168.0.19:3000';

const client = axios.create({
  baseURL: 'http://192.168.0.42:8080',
});

export function applyToken(jwt: string) {
  client.defaults.headers.Authorization = `Bearer ${jwt}`;
}

export function clearToken() {
  client.defaults.headers.Authorization = null;
}

export default client;
