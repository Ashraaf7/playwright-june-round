import { test } from '@playwright/test';
import { CartPage } from '../../pages/cart.page';
import { InventoryPage } from '../../pages/inventory.page';
import { LoginPage } from '../../pages/login.page';
import { validUser } from '../data/login.data';
import { backpack } from '../data/products.data';

test('cart displays the selected product with correct name, quantity, and price', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);
    await loginPage.expectLoginSucceeded();

    await inventoryPage.addProductToCart(backpack.addToCartTestId);
    await inventoryPage.openCart();

    await cartPage.expectItemDetails(backpack);
});
