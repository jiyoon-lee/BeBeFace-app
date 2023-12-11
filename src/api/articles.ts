import client from './client';
import {Article} from './types';

export async function getArticles() {
  const response = await client.get<Article[]>(
    'http://localhost:3000/api/push/smile',
  );
  return response.data;
}
