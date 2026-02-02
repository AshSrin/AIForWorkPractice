// JIRA: NEWS-101
import { test, expect } from '@playwright/test';

test('User can open top story', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="top-story"]');
  await expect(page).toHaveURL(/article/);
});
