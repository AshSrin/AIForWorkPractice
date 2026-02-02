// API-77
import { test, expect } from '@playwright/test';

test('Fetch top stories', async ({ request }) => {
  const response = await request.post('/graphql', {
    data: {
      query: `
        query {
          topStories {
            id
            title
          }
        }
      `
    }
  });

  expect(response.ok()).toBeTruthy();
});
