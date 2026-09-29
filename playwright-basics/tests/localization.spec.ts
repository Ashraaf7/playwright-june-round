import { test, expect } from '@playwright/test';
import localData from '../test-data/local.json';

test('localization test', async ({ page }) => {
    const language = test.info().project.metadata.language;
    await page.goto('https://www.amazon.com/');
    await page.waitForTimeout(3000);

    const headerItems = page.locator('#nav-xshop li a.nav-a');
    await expect(headerItems).toHaveText(localData[language]);
});