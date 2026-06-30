import { selectors, test } from '@playwright/test';


test('Shadow Element', async ({ page }) => {
    selectors.setTestIdAttribute('data-testid');
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your user').fill('admin');
    await page.getByPlaceholder('enter your pass').fill('admin');
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.getByText('shadow dom').click();
    await page.getByTestId('open-input').fill('Ahmed'); // Shadow element
});
