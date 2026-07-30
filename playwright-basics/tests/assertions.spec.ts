import { expect, selectors, test } from '@playwright/test';


test('Auto-retry assertions', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: 'Sign In' }).click();
    //await expect(page.locator('h1')).toHaveText('Practice Modules'); //auto-retry assertion
    const txt = await page.locator('h1').innerText();
    expect(txt).toBe('Practice Modules'); //non-retry assertion
});

test('visibility TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me on this device' }).click();
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/dropDown.html');
    await page.pause();
    await page.selectOption('#experience-dropdown', { value: '0-1' });
    await expect(page.locator('#assertion-message')).toBeVisible();
});


test('no-retry assertion', async ({ context, page }) => {
    context.addCookies([{ name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html' }]);
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html');
    await page.locator('[data-testid="download-cv-btn-1"]').click();
    // const text = await page.locator('[data-testid="download-cv-btn-1"]').getAttribute('value');
    // expect(text).toBe('Downloaded!');
    await expect(page.locator('[data-testid="download-cv-btn-1"]')).toHaveAttribute('value', 'Downloaded!', { timeout: 10000 });
});

test('poll assertion', async ({ context, page }) => {
    context.addCookies([{ name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html' }]);
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html');
    await page.locator('[data-testid="download-cv-btn-1"]').click();
    // expect(text).toBe('Downloaded!'); //non-retry assertion
    await expect.poll(async () => {
        const text = await page.locator('[data-testid="download-cv-btn-1"]').getAttribute('value');
        return text;
    }, { timeout: 10000 }).toBe('Downloaded!');
});

test('toPass assertion', async ({ context, page }) => {
    context.addCookies([{ name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html' }]);
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html');
    await page.locator('[data-testid="download-cv-btn-1"]').click();
    // expect(text).toBe('Downloaded!'); //non-retry assertion
    await expect(async () => {
        const text = await page.locator('[data-testid="download-cv-btn-1"]').getAttribute('value');
        expect(text).toBe('Downloaded!');
        expect(text).not.toBe('Downloading...');
        expect(text).not.toBe('Download');
        expect(text).not.toBe('Download CV');
    }).toPass();
});

test('matchers assertion', async ({ context, page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    const loginButton = page.getByRole('button', { name: 'Sign In' });
    await expect(loginButton).toHaveAttribute('class', expect.stringContaining('text-white'));
});

//Hard assertion & Soft assertion
test('hard assertion', async ({ context, page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.locator('h1')).toHaveText('Practice Module'); //hard assertion
    await expect(page.url()).toContain('/main.html'); //hard assertion
});

//Hard assertion & Soft assertion
test('soft assertion', async ({ context, page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: 'Sign In' }).click();
    const customExpect = expect.configure({ timeout: 20000, soft: true, message: 'Custom assertion failed' });
    await customExpect(page.locator('h1'), 'verify page header').toHaveText('Practice Module'); //soft assertion
    await expect.soft(page.locator('h1'), 'verify page header').toHaveText('Practice Module'); //soft assertion
    await expect.soft(page.url(), 'verify page url').toContain('/main2.html'); //soft assertion
});





