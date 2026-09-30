# Swag Labs Add Product to Cart Test Plan

## Application Overview

Validate that an authenticated Swag Labs user can add catalog products to the shopping cart from both the product listing and product details page, and that cart indicators and line items reflect the additions. Use the documented standard_user / secret_sauce demo credentials. Run each scenario independently from a fresh browser context with an empty cart.

## Test Scenarios

### 1. Shopping Cart - Add Products

**Seed:** `tests/seed.spec.ts`

#### 1.1. Add a product from the inventory list

**File:** `tests/cart/add-product-to-cart.spec.ts`

**Steps:**
  1. Start from a fresh browser context, open https://www.saucedemo.com/, and sign in with standard_user / secret_sauce.
    - expect: The browser navigates to /inventory.html and the Products heading is visible.
    - expect: The cart control is empty and has no item count.
  2. Locate Sauce Labs Backpack in the inventory and select its Add to cart button.
    - expect: The Backpack action changes from Add to cart to Remove.
    - expect: The cart control displays an item count of 1.
  3. Open the cart.
    - expect: The Your Cart page is displayed.
    - expect: Sauce Labs Backpack appears in the cart with quantity 1.

#### 1.2. Add a product from its details page

**File:** `tests/cart/add-product-from-details.spec.ts`

**Steps:**
  1. Start from a fresh browser context, open https://www.saucedemo.com/, and sign in with standard_user / secret_sauce.
    - expect: The Products page is displayed with an empty cart.
  2. Open the Sauce Labs Bike Light details from its product entry.
    - expect: The details page displays Sauce Labs Bike Light, its description and price, and an Add to cart button.
  3. Select Add to cart on the Bike Light details page, then open the cart.
    - expect: The details-page action changes to Remove and the cart count becomes 1.
    - expect: The cart contains Sauce Labs Bike Light with quantity 1.

#### 1.3. Add multiple different products and verify the cart count

**File:** `tests/cart/add-multiple-products.spec.ts`

**Steps:**
  1. Start from a fresh browser context, open https://www.saucedemo.com/, and sign in with standard_user / secret_sauce.
    - expect: The Products page is displayed and the cart is empty.
  2. Add Sauce Labs Backpack and Sauce Labs Bike Light from their inventory entries.
    - expect: Each selected product action changes to Remove.
    - expect: The cart control displays a count of 2.
  3. Open the cart.
    - expect: The cart contains both Sauce Labs Backpack and Sauce Labs Bike Light.
    - expect: Each product has quantity 1 and no other product appears in the cart.
