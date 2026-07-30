import { type Page, expect, type Locator } from 'playwright/test';
export class LoginPage {
    //Locators
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly rememberMeCheckbox: Locator;
    private readonly errorMessage: Locator;
    private readonly emptyUsernameErrorLocator: Locator;
    private readonly emptyPasswordErrorLocator: Locator;
    //Variables
    private readonly url = "https://aa-practice-test-automation.vercel.app/index.html";
    private readonly emptyUsernameErrorMessage = "Username is required.";
    private readonly emptyPasswordErrorMessage = "Password is required."
    private readonly invalidCredentialsErrorMessage = "Invalid credentials. Use admin/admin";
    private readonly page: Page;

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#inputUsername');
        this.passwordInput = page.locator('#inputPassword');
        this.loginButton = page.locator('[title="za3bola"]');
        this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember Me' });
        this.errorMessage = page.getByRole('alert');
        this.emptyUsernameErrorLocator = page.locator('#usernameError');
        this.emptyPasswordErrorLocator = page.locator('#passwordError');
    }

    //Actions
    async navigateToLoginPage() {
        await this.page.goto(this.url);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.rememberMeCheckbox.check();
        await this.loginButton.click();
    }
    //Verifications
    async verifyEmptyUsernameError() {
        await expect(this.emptyUsernameErrorLocator).toHaveText(this.emptyUsernameErrorMessage);
    }
    async verifyEmptyPasswordError() {
        await expect(this.emptyPasswordErrorLocator).toHaveText(this.emptyPasswordErrorMessage);
    }
    async verifyInvalidCredentialsError() {
        await expect(this.errorMessage).toHaveText(this.invalidCredentialsErrorMessage);
    }

}