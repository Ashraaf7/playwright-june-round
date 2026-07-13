import { selectors, test } from '@playwright/test';


test('Simple Frame', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/dropDown.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/frames-windows/frames.html');
    await page.frameLocator('#simpleFrame').getByPlaceholder('Enter email').fill('ahmed@test.com');
});

test('nested Frames', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/dropDown.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/frames-windows/frames.html');
    // await page.frame({ url: 'https://aa-practice-test-automation.vercel.app/Pages/frames-windows/outer-frame.html' })?.frameLocator('#middleFrame').getByPlaceholder('Middle input').fill('Middle input');
    await page.frameLocator('#outerFrame').frameLocator('#middleFrame').getByPlaceholder('Middle input').fill('Middle input');
    //const arr = await page.frames();
});

