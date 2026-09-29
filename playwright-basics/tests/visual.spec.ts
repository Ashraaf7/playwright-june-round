import { test, expect } from '@playwright/test';


test('visual test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await expect(page).toHaveScreenshot({ stylePath: 'screenshots.css' });
});

test('snapshot test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    const text = await page.locator('p').textContent();
    expect(text).toMatchSnapshot('paragraph.txt');
});