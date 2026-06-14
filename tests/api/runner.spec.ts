import { test, expect } from '@playwright/test';
import { endpoints } from '../../resources/endpoints';
import { articlePayload } from '../../resources/articlePayload';
import { getAuthToken } from '../../utils/authToken';



test('fetch api details', async ({ request }) => {

  // Sending a GET request to the specified URL and storing the response in the 'response' variable
  const response = await request.get(endpoints.tags);
  //Extraction of the response object into JSON format
  const data = await response.json();
  console.log(data);

  // Assertion to verify that the response contains the expected tag
  expect(data.tags).toContain('Test');
});

test('to do POST request', async ({ request }) => {


  const response = await request.post(endpoints.articles, {
    headers:{
      Authorization: getAuthToken()
    },
    data: articlePayload()
    });
 
  const data = await response.json();
  console.log(data);

  // // Assertion to verify that the response contains the expected tag
  // expect(data.tags).toContain('Test');
});



