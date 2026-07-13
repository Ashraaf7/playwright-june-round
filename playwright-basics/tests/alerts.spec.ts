import { selectors, test } from '@playwright/test';

test('Alerts', async ({ page }) => {
    const prommptHandler = async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept('Accepted');
    };
    page.once('dialog', prommptHandler);
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/dialogs/alerts.html');
    await page.getByRole('button', { name: 'Prompt' }).click();
    //page.off('dialog', prommptHandler);
    page.once('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.dismiss();
    });
    await page.getByRole('button', { name: 'Confirm Dialog' }).click();
});