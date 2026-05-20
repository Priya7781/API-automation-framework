import { test, expect } from '@playwright/test';

test('launch login page', async ({ page }) => {
  await page.goto('https://priya7781.github.io/login-page/');

  await expect(page).toHaveURL(/\/login/);

  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('1234');
  await page.locator('button[type="submit"]').click();

  await expect(page.locator('#message'))
    .toHaveText('Login Successful!');
});