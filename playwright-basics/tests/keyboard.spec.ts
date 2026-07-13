import { selectors, test } from '@playwright/test';
import path from 'node:path';

test('Upload Files basic', async ({ page }) => {
    await page.goto('https://www.toptal.com/developers/keycode');
    await page.keyboard.press('Enter');
});