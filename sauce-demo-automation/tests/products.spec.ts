import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

let pManger: PageManager;


test('User can add a product to the cart', async ({ page }) => {
    pManger = new PageManager(page);
    await pManger.getLoginPage().goToLoginPage();
    await pManger.getLoginPage().login('standard_user', 'secret_sauce');
    await pManger.getProductsPage().addProductToCart('Sauce Labs Bike Light');
    await pManger.getProductsPage().validateProductIsInCart(1);
});

test('User can view product information', async ({ page }) => {
    pManger = new PageManager(page);
    await pManger.getLoginPage().goToLoginPage();
    await pManger.getLoginPage().login('standard_user', 'secret_sauce');
    await pManger.getProductsPage().validateProductInfo('Sauce Labs Fleece Jacket', '$49.99');
});