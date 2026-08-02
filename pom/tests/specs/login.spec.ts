import { test } from 'playwright/test';
import { PageManager } from '../pages/page-manager';
import loginData from '../../test-data/login-data.json';
import loginDataTS from '../../test-data/login-data-ts';
import { CsvReader } from '../utils/cvsReader';

let pageManager: PageManager;

test.beforeEach(async ({ page }) => {
    pageManager = new PageManager(page);
    await pageManager.getLoginPage().navigateToLoginPage();
});

test('TC1', async ({ page }) => {
    // const timestamp = Date.now();toBot_${timestamp}@gmail.com`;
    // console.log('Generated email:', email);
    const csvReader = new CsvReader();
    await csvReader.loadFile('../../test-data/login-csv.csv');
    //await pageManager.getLoginPage().login(loginDataTS.TC1.username, loginDataTS.TC1.password);
    await pageManager.getLoginPage().login(csvReader.getDataByRowAndColumn(0, 'username')!, csvReader.getDataByRowAndColumn(0, 'password')!);
    await pageManager.getHomePage().verifyThatUserIsLoggedIn();
});

test('TC2', async ({ page }) => {
    await pageManager.getLoginPage().login(loginDataTS.TC2.username, loginDataTS.TC2.password);
    await pageManager.getHomePage().verifyThatUserIsLoggedIn();
    await pageManager.getHomePage().logout();
    await pageManager.getLoginPage().verifyThatUserIsLoggedOut();
});

test('TC3', async ({ page }) => {
    await pageManager.getLoginPage().login(loginDataTS.TC3.username, loginDataTS.TC3.password);
    await pageManager.getLoginPage().verifyInvalidCredentialsError();
});

test('TC4', async ({ page }) => {
    await pageManager.getLoginPage().login(loginData.empty.username, loginData.empty.password); //bad practice, you can use empty string directly in the login method
    await pageManager.getLoginPage().verifyEmptyUsernameError();
    await pageManager.getLoginPage().verifyEmptyPasswordError();
});


