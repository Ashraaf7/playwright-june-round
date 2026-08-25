
import { chromium, test } from 'playwright/test';
import { PageManager } from '../pages/page-manager';
import loginData from '../test-data/login-data.json';
import invalidUsers from '../test-data/invalid-users.json';
import loginDataTS from '../test-data/login-data-ts';
import { CsvReader } from '../utils/cvsReader';

test('TC1', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html/actions');
});
