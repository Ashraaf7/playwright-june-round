import { chromium, test } from 'playwright/test';
import { PageManager } from '../../pages/page-manager';
import loginData from '../../test-data/login-data.json';
import invalidUsers from '../../test-data/invalid-users.json';
import loginDataTS from '../../test-data/login-data-ts';
import { CsvReader } from '../../utils/cvsReader';
let pageManager: PageManager;


test('loginTC', { tag: '@valid' }, async ({ page }) => {
    pageManager = new PageManager(page);
    await pageManager.getLoginPage().navigateToLoginPage();
    await pageManager.getLoginPage().login(loginDataTS.TC2.username, loginDataTS.TC2.password);
    await pageManager.getHomePage().verifyThatUserIsLoggedIn();
    await pageManager.getHomePage().logout();
    await pageManager.getLoginPage().verifyThatUserIsLoggedOut();
});