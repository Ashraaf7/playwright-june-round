import { selectors, test } from '@playwright/test';
import path from 'node:path';

test('Upload Files basic', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/file-operations/uploadFile.html');
    await page.locator('#regularFileInput').setInputFiles(path.join(__dirname, '../test-data/test.txt'));
    await page.locator('#regularFileInput').setInputFiles([]); // Clear the file input
});

test('Upload Files wait for event', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/file-operations/uploadFile.html');
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('#chooseFileBtn').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname, '../test-data/test.txt'));
});

test('Upload Files page.on', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/file-operations/uploadFile.html');
    page.on('filechooser', async (fileChooser) => {
        console.log('File chooser event triggered');
        await fileChooser.setFiles(path.join(__dirname, '../test-data/test.txt'));
    });
    await page.locator('#chooseFileBtn').click(); //event will be triggered and file will be uploaded
    await page.locator('#chooseFileBtn').press('Enter'); //event will be triggered and file will be uploaded

});