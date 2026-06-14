import { test, expect } from '@playwright/test';
import { endpoints } from '../../resources/endpoints';
import { articlePayload } from '../../resources/articlePayload';
import { getAuthToken } from '../../utils/authToken';

test('fetch api details', async ({ request }) => {
  const response = await request.get(endpoints.tags);

  console.log('Status:', response.status());
  console.log('URL:', response.url());
  console.log('Body:', await response.text());
  const data = await response.json();

  expect(data.tags).toContain('Test');
});

test('to do POST request', async ({ request }) => {
  const response = await request.post(endpoints.articles, {
    headers: {
      Authorization: getAuthToken()
    },
    data: articlePayload()
  });
  console.log(await response.text());

  const data = await response.json();
  console.log(data);

  expect(response.status()).toBe(201);
});
