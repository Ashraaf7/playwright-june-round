import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { validUser } from './data/login.data';

test('valid user can log in to Swag Labs', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);
    await loginPage.expectLoginSucceeded();
});