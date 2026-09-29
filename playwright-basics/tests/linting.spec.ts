import { test, expect } from '@playwright/test';

test.only('visibility TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/dropDown.html');
    await page.selectOption('#experience-dropdown', { value: '0-1' });
    await expect(page.locator('#assertion-message')).toBeVisible();
    console.error('Assertion message is visible');
});

function exampleFunction() {
    let name = 'example';
}
