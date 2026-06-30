import { selectors, test } from '@playwright/test';


test('Focus and Blur', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).blur();
    await page.getByRole('textbox', { name: 'PASSWORD' }).focus();
    // await page.getByRole('checkbox', { name: 'Remember me' }).click();
    // await page.getByRole('button', { name: /^Sign.*/ }).click();
});

test('check and uncheck', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/basic-actions/checkbox_Radio.html');
    await page.getByRole('checkbox', { name: 'Al-Ahly' }).check(); //check the checkbox
    await page.getByRole('radio', { name: 'College' }).check(); //check the radio button
    await page.getByRole('checkbox', { name: 'Al-Ahly' }).uncheck(); //check the checkbox
});
