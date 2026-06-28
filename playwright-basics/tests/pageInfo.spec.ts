import { test, chromium } from '@playwright/test';

test('Page Info Test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    const pageTitle = await page.title();
    const url = page.url();
    const pageContent = await page.content();
    console.log(`Page Title: ${pageTitle}` + `\nURL: ${url}` + `\nPage Content : ${pageContent}`);
});