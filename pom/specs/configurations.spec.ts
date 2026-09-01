import { chromium, test } from 'playwright/test';


test.use({ baseURL: undefined })
test('color scheme', async ({ page }) => {
    await page.goto('https://playwright.dev/');
});


test('geolocation', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/geolocation');
    await page.getByRole('button', { name: 'Where am I?' }).click();
});

test('language', async ({ page }) => {
    await page.goto('https://www.noon.com');
});

test('downloads', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    await page.getByRole('link', { name: 'testing_firefox.pdf' }).click();
});

test('http authentication', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
});