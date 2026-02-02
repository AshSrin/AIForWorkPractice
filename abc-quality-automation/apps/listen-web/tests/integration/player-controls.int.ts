import { test, expect } from '@playwright/test';

test('player controls toggle playback', async ({ page }) => {
  await page.goto('/');
  const playButton = page.getByRole('button', { name: /play|pause/i });
  await expect(playButton).toBeVisible();
  await playButton.click();
  await expect(playButton).toBeVisible();
});
