import { chromium, test } from 'playwright/test';
import { PageManager } from '../pages/page-manager';
import loginData from '../test-data/login-data.json';
import invalidUsers from '../test-data/invalid-users.json';
import loginDataTS from '../test-data/login-data-ts';
import { CsvReader } from '../utils/cvsReader';

let pageManager: PageManager;

//test.describe.configure({ retries: 2, mode: 'serial' });
test.describe('Valid Login Tests', { tag: '@login' }, () => {
    test.beforeEach(async ({ page }) => {
        pageManager = new PageManager(page);
        await pageManager.getLoginPage().navigateToLoginPage();
    });

    test('TC1', {
        tag: ['@valid', '@daily'], annotation: { type: 'test-case', description: 'https://www.jira.com/browse/TEST-1' }
    }, async ({ page, browser }) => {
        test.info().annotations.push(
            {
                type: 'browser-version',
                description: browser.version()
            }
        )
        // const timestamp = Date.now();toBot_${timestamp}@gmail.com`;
        // console.log('Generated email:', email);
        const csvReader = new CsvReader();
        await csvReader.loadFile('../test-data/login-csv.csv');
        //await pageManager.getLoginPage().login(loginDataTS.TC1.username, loginDataTS.TC1.password);
        await pageManager.getLoginPage().login(csvReader.getDataByRowAndColumn(0, 'username')!, csvReader.getDataByRowAndColumn(0, 'password')!);
        await pageManager.getHomePage().verifyThatUserIsLoggedIn(); //5 sec timeout
    });

    test.fail('TC2', { tag: '@valid' }, async ({ page }) => {
        await pageManager.getLoginPage().login(loginDataTS.TC2.username, loginDataTS.TC2.password);
        await pageManager.getHomePage().verifyThatUserIsLoggedIn();
        await pageManager.getHomePage().logout();
        await pageManager.getLoginPage().verifyThatUserIsLoggedOut();
    });
});

test.describe('Invalid Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        pageManager = new PageManager(page);
        await pageManager.getLoginPage().navigateToLoginPage();
    });
    test('TC3', { tag: '@invalidTC' }, async ({ page }) => {
        await pageManager.getLoginPage().login(loginDataTS.TC3.username, loginDataTS.TC3.password);
        await pageManager.getLoginPage().verifyInvalidCredentialsError();
    });

    test('TC4', async ({ page }) => {
        //test.slow(); //triple the timeout for this test case
        await pageManager.getLoginPage().login(loginData.empty.username, loginData.empty.password); //bad practice, you can use empty string directly in the login method
        await pageManager.getLoginPage().verifyEmptyUsernameError();
        await pageManager.getLoginPage().verifyEmptyPasswordError();
    });



    invalidUsers.forEach(({ username, password }) => {
        test(`TC5_verify that the user can not login with invalid credentials using ${username} & ${password}`, { tag: '@invalid' }, async ({ page, browserName }) => {
            test.skip(browserName === 'firefox', 'Skipping this test on firefox due to known issue');
            test.setTimeout(120000);
            await pageManager.getLoginPage().login(username, password);
            await pageManager.getLoginPage().verifyInvalidCredentialsError();
        });
    });

});


