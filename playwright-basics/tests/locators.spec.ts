import { selectors, test } from '@playwright/test';


test('By Role', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app//index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
});

test('By Label', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app//index.html');
    await page.getByLabel('user').fill('admin');
    await page.getByLabel('Password').fill('admin');
    await page.getByRole('button', { name: /^Sign.*/ }).click();
});

test('By Placeholder  ', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app//index.html');
    await page.getByPlaceholder('enter your user').fill('admin');
    await page.getByPlaceholder('enter your pass').fill('admin');
    await page.getByRole('button', { name: /^Sign.*/ }).click();
});

test('By Text  ', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app//index.html');
    const txt = await page.getByText('Welcome! ').textContent();
    console.log('Text content:', txt);
});

test('By Alt Text  ', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByAltText('Fork me').click();
});

test('By Title  ', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app//index.html');
    await page.getByTitle('za3bola').click();
});

test('By Test-id  ', async ({ page }) => {
    selectors.setTestIdAttribute('automation-id');
    await page.goto('https://aa-practice-test-automation.vercel.app//index.html');
    await page.getByTestId('username-input').fill('admin');
    await page.getByTestId('password-input').fill('admin');
    await page.getByTestId('login-button').click();
});
