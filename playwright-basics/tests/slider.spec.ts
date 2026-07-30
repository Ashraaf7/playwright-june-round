import { test } from '@playwright/test';
test.beforeAll(async () => {
    console.log('Before All Tests');
});


test.beforeEach(async ({ page, context }, testInfo) => {
    context.addCookies([{ name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/form-controls/slider.html' }]);
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/slider.html');
    console.log(`Test Case Name: ${testInfo.title}`);
});



test('Slider TC', async ({ context, page }) => {
    await page.locator('#basicSlider').evaluate((slider) => {
        slider.setAttribute('value', '90');
    });
});
// "element[0].setAttribute('value', '90');"


test('scrolling TC', async ({ context, page }) => {
    await page.locator('h6').evaluate((heading) => {
        heading.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    });
});

test.afterEach(async () => {
    console.log('After Each Test');
});


test.afterAll(async () => {
    console.log('After All Tests');

});