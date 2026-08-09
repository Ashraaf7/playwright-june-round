import { type Page } from '@playwright/test';
import { LoginPage } from './login-page';
import { HomePage } from './home-page';



export class PageManager {
    private readonly page: Page;
    private readonly loginPage: LoginPage;
    private readonly homePage: HomePage;
    //  private readonly productPage: ProductPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        //  this.productPage = new ProductPage(page);
    }

    //getters
    getLoginPage() {
        return this.loginPage
    }

    getHomePage() {
        return this.homePage
    }
}