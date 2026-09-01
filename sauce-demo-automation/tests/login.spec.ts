import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

let pManger: PageManager;

test('user can log in successfully', async ({ page }) => {
  pManger = new PageManager(page);
  await pManger.getLoginPage().goToLoginPage();
  await pManger.getLoginPage().login('standard_user', 'secret_sauce');
  await pManger.getProductsPage().validateThatTheUserIsLoggedIn();
});


test('user can log out successfully', async ({ page }) => {
  pManger = new PageManager(page);
  await pManger.getLoginPage().goToLoginPage();
  await pManger.getLoginPage().login('standard_user', 'secret_sauce');
  await pManger.getProductsPage().logout();
  await pManger.getLoginPage().validateThatTheUserIsLoggedOut();
});