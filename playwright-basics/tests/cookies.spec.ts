import { test } from '@playwright/test';
import console from 'node:console';


test('tabs TC', async ({ context, page }) => {
    const websitePage = page;
    context.addCookies([{ name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/main.html' }]);
    await websitePage.goto('https://aa-practice-test-automation.vercel.app/Pages/main.html');
});