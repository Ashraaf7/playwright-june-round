import { test } from '@playwright/test';
//navigate to
test('Playwright TC', async ({ page }) => {
  const response = await page.goto('https://playwright.dev/ahmed', { referer: 'https://www.google.com/' });
  console.log(response?.status());
});


test('Google TC', async ({ page }) => {
  await page.goto('https://www.google.com/');
});

//back
test('Back TC', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.goto('https://www.facebook.com/');
  await page.goBack();
});


//forward
test('Forward TC', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.goto('https://www.facebook.com/');
  await page.goBack(); //back to google
  await page.goForward(); //forward to facebook
});

//refresh
test('Refresh TC', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.reload();
});