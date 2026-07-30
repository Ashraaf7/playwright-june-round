import { test } from 'playwright/test';
import { LoginPage } from '../pages/login-page';

let loginPage: LoginPage; //global variable to hold the instance of LoginPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
});

test('valid login tc', async ({ page }) => {

});

test('invalid login tc using invalid credentials', async ({ page }) => {
    await loginPage.login('invalidUser', 'invalidPassword');
    await loginPage.verifyInvalidCredentialsError();
});

test('invalid login tc using empty credentials', async ({ page }) => {
    await loginPage.login('', '');
    await loginPage.verifyEmptyUsernameError();
    await loginPage.verifyEmptyPasswordError();
});


