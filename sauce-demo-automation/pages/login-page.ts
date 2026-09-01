import { type Page, expect, type Locator } from 'playwright/test';


export class LoginPage {
    //Locators for the login page elements
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    //Variables for the login page elements
    private readonly page: Page;


    //Constructor for the login page class
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByTestId('username');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
    }


    //Actions for the login page elements

    async goToLoginPage() {
        await this.page.goto('/');
    }
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


    //Assertions for the login page elements

    async validateThatTheUserIsLoggedOut() {
        await expect(this.loginButton).toBeVisible();
    }
}