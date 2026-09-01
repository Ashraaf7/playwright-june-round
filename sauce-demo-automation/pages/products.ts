import { type Page, expect, type Locator } from 'playwright/test';

export class ProductsPage {

    //Locators for the products page elements
    private readonly productsTitle: Locator;
    private readonly productComponent: Locator;
    private readonly addToCartButton: Locator;
    private readonly cartIcon: Locator;
    private readonly productName: Locator;
    private readonly productPrice: Locator;
    private readonly burgerMenuButton: Locator;
    private readonly logoutButton: Locator;

    //Variables for the products page elements
    private readonly page: Page;
    private readonly productsUrl = "/inventory.html";

    //Constructor for the products page class
    constructor(page: Page) {
        this.page = page;
        this.productsTitle = page.getByTestId('title');
        this.productComponent = page.getByTestId('inventory-item-description');
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.cartIcon = page.getByTestId('shopping-cart-badge');
        this.productName = page.getByTestId('inventory-item-name');
        this.productPrice = page.getByTestId('inventory-item-price');
        this.burgerMenuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.getByTestId('logout-sidebar-link');
    }

    //Actions for the products page elements
    async navigateToProductsPage() {
        await this.page.goto(this.productsUrl);
    }
    async addProductToCart(productName: string) {
        await this.productComponent.filter({ hasText: productName }).locator(this.addToCartButton).click();
    }

    async logout() {
        await this.burgerMenuButton.click();
        await this.logoutButton.click();
    }


    //Assertions for the products page elements
    async validateThatTheUserIsLoggedIn() {
        // Implementation for validating that the user is logged in
        await expect(this.productsTitle).toBeVisible();
    }

    async validateProductIsInCart(expectedCartCount: number) {
        await expect(this.cartIcon).toHaveText(expectedCartCount.toString());
    }

    async validateProductInfo(productName: string, productPrice: string) {
        const product_name = this.productName.filter({ hasText: productName });
        //   const product_price = this.productPrice.filter({ hasText: productPrice }); //de7k
        const product_price = this.productComponent.filter({ hasText: productName }).locator(this.productPrice);
        await expect(product_name).toHaveText(productName);
        await expect(product_price).toHaveText(productPrice);
    }
}