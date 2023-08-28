// @ts-check
import { test, expect } from '@playwright/test';

const LOCAL_HOSTROUTE = 'http://localhost:5173/';

test('has fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOSTROUTE);

  const fact = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const factContent = await fact.textContent();
  const imgContent = await image.getAttribute('src');

  await expect(factContent?.length).toBeGreaterThan(0);
  await expect(imgContent?.length).toBeGreaterThan(0);
});
