import { test } from '@playwright/test';

test('Shared audio player renders', async ({ page }) => {
  await page.goto('/component/audio-player');
});
