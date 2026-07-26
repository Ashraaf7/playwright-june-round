import { test } from '@playwright/test';


test('auto scroll TC', async ({ context, page }) => {
    context.addCookies([{ name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/mouse-keyboard/scrolling.html' }]);
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/mouse-keyboard/scrolling.html');
    await page.getByRole('button', { name: 'Submit Form' }).click();
});

test('scrollIfNeeded TC', async ({ context, page }) => {
    context.addCookies([{ name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/mouse-keyboard/scrolling.html' }]);
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/mouse-keyboard/scrolling.html');
    await page.getByRole('button', { name: 'Choose a state' }).click(); //dropdown will be opened
    await page.getByText('Mississippi').scrollIntoViewIfNeeded();//remaining options will be appeared after scrolling
    await page.getByText('Nevada').click();
});