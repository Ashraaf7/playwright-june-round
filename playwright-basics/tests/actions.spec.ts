import { selectors, test } from '@playwright/test';


test('Focus and Blur', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).blur();
    await page.getByRole('textbox', { name: 'PASSWORD' }).focus();
    // await page.getByRole('checkbox', { name: 'Remember me' }).click();
    // await page.getByRole('button', { name: /^Sign.*/ }).click();
});

test('check and uncheck', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/basic-actions/checkbox_Radio.html');
    await page.getByRole('checkbox', { name: 'Al-Ahly' }).check(); //check the checkbox
    await page.getByRole('radio', { name: 'College' }).check(); //check the radio button
    await page.getByRole('checkbox', { name: 'Al-Ahly' }).uncheck(); //check the checkbox
});

test('hover', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    await page.getByAltText('User Avatar').first().hover();
});

test('fill', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
});

test('key pressSequentially', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).pressSequentially('admin', { delay: 500 });
    await page.getByRole('textbox', { name: 'PASSWORD' }).pressSequentially('admin', { delay: 500 });
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
});

test('press', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses');
    await page.getByRole('textbox').fill('Ahmed');
    await page.getByRole('textbox').press('Control+a');
});


test('Select Option', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/dropDown.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/dropDown.html');
    await page.locator('#experience-dropdown').selectOption({ index: 1 });
});

test('multi select', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/dropDown.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/dropDown.html');
    await page.locator('#skills-select').selectOption(['Python', 'Java', 'Selenium']);
});

test('date picker built-in', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/datePicker.html');
    await page.locator('#basicDate').fill('2024-01-15')
});

test('date picker', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/datePicker.html');
    await page.locator('#open-calendar-btn').click();
    await page.getByRole('button', { name: '<' }).click();
    await page.getByRole('button', { name: '2', exact: true }).click();
});



test('drag drop', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/mouse-keyboard/dragDrop.html');
    await page.locator('#kanban-card-1').dragTo(await page.locator('#kanban-inprogress'));
});

test('drag drop using mouse', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user', exact: true }).fill('admin');
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).click();
    await page.getByRole('button', { name: /^Sign.*/ }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/mouse-keyboard/dragDrop.html');
    await page.locator('#kanban-card-1').hover();
    await page.mouse.down();
    await page.locator('#kanban-inprogress').hover();
    await page.mouse.up();
});
