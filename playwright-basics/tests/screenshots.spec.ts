import { expect, selectors, test } from '@playwright/test';
import path from 'path';

test('screenshot', async ({ context, page }, testInfo) => {
    context.addCookies([{ name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/mouse-keyboard/scrolling.html' }]);
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/mouse-keyboard/scrolling.html');
    const screenshotDir = path.join(__dirname, '../screenshots');

    const screenshot = await page.screenshot({ path: path.join(screenshotDir, 'normal-screenshot.png') });
    const fullScreenshot = await page.screenshot({ path: path.join(screenshotDir, 'full-screenshot.png'), fullPage: true });
    const elementScreenshot = await page.locator('.task-container').first().screenshot({ path: path.join(screenshotDir, 'element-screenshot.png') });

    testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
    testInfo.attach('full-screenshot', { body: fullScreenshot, contentType: 'image/png' });
    testInfo.attach('element-screenshot', { body: elementScreenshot, contentType: 'image/png' });
});