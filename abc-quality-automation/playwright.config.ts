import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  projects: [
    {
      name: 'web-news',
      testDir: 'apps/web-news/tests'
    },
    {
      name: 'listen-web',
      testDir: 'apps/listen-web/tests'
    },
    {
      name: 'content-api',
      testDir: 'services/content-api/tests'
    }
  ]
});
