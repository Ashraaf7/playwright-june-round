// spec: tests/test-plans/add-product-to-cart.test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';
import { CartPage } from '../../pages/cart.page';
import { validUser } from '../data/login.data';
import { backpack } from '../data/products.data';

test.describe('Shopping Cart - Add Products', () => {
  test('Add a product from the inventory list', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // 1. Start from a fresh browser context, open the Swag Labs login page, and sign in.
    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);
    await loginPage.expectLoginSucceeded();
    await expect(inventoryPage.cartLink).toHaveAccessibleName('Cart, empty');

    // 2. Locate Sauce Labs Backpack in the inventory and select its Add to cart button.
    await inventoryPage.addProductToCart(backpack.addToCartTestId);
    await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
    await expect(inventoryPage.cartLink).toHaveText(backpack.quantity);

    // 3. Open the cart.
    await inventoryPage.openCart();
    await cartPage.expectItemDetails({
      name: backpack.name,
      quantity: backpack.quantity,
      price: backpack.price,
    });
  });
});
