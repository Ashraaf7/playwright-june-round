import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
import { generateAccessibilityReport } from 'accessibility-reporter';

test('accessibility test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    generateAccessibilityReport(accessibilityScanResults, { outputPath: 'accessibility-report.html' });
});