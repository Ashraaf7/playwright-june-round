import { test } from '@playwright/test';

test('Slider TC', async ({ context, page }) => {
    context.addCookies([{ name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/form-controls/slider.html' }]);
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/slider.html');
    await page.locator('#basicSlider').evaluate((slider) => {
        slider.setAttribute('value', '90');
    });
});
// "element[0].setAttribute('value', '90');"


test('scrolling TC', async ({ context, page }) => {
    context.addCookies([{ name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/form-controls/slider.html' }]);
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/slider.html');
    await page.locator('h6').evaluate((heading) => {
        heading.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    });
});