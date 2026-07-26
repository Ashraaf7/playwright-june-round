import { test } from '@playwright/test';
import console from 'node:console';


test('tabs TC', async ({ context, page }) => {
    const websitePage = page;
    context.addCookies([{ name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/main.html' }]);
    await websitePage.goto('https://aa-practice-test-automation.vercel.app/Pages/main.html');
    const linkedinPage = context.waitForEvent('page')
    await websitePage.getByRole('link', { name: 'Ahmed Ashraf' }).click();
    console.log('Linkedin page title is: ' + await (await linkedinPage).title());
    console.log('Website page title is: ' + await websitePage.title());
    await websitePage.bringToFront();
    //(await linkedinPage).close();
});