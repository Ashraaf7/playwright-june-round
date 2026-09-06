import { test } from '../utils/fixtures/myFixure';

test('User can add a product to the cart', async ({ loginPage, productsPage }) => {
    await productsPage.addProductToCart('Sauce Labs Bike Light');
    await productsPage.validateProductIsInCart(1);
});

test('User can view product information', async ({ loginPage, productsPage }) => {
    await productsPage.navigateToProductsPage();
    await productsPage.validateProductInfo('Sauce Labs Fleece Jacket', '$49.99');
});