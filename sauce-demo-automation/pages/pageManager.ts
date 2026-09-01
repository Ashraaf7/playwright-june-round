import { type Page, expect, type Locator } from 'playwright/test';
import { LoginPage } from './login-page';
import { ProductsPage } from './products';

export class PageManager {
    private readonly page: Page;
    private readonly loginPage: LoginPage;
    private readonly productsPage: ProductsPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.productsPage = new ProductsPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getProductsPage() {
        return this.productsPage;
    }
}