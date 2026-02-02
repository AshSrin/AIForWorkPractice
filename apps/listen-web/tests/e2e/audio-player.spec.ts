// LISTEN-44
import { test } from '@playwright/test';

test('Audio playback works', async ({ page }) => {
  await page.goto('/listen');
  await page.click('#play');
});