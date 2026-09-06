import { test } from '../utils/fixtures/myFixure';


test('user can log in successfully', async ({ loginPage, productsPage }) => {
  await productsPage.validateThatTheUserIsLoggedIn();
});


test('user can log out successfully', async ({ loginPage, productsPage }) => {
  await productsPage.logout(); ``
  await loginPage.validateThatTheUserIsLoggedOut();
});