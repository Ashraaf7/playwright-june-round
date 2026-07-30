import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
  await page.getByTestId('username-input').fill('ahmed');
  await page.getByTestId('username-input').press('Tab');
  await page.getByTestId('password-input').fill('ahmed');
  await page.getByTestId('login-button').click();
  await expect(page.locator('#loginError')).toContainText('Invalid credentials. Use admin/admin');
});