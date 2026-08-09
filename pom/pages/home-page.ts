import { type Page, expect, type Locator } from 'playwright/test';

export class HomePage {
    //Locators
    private readonly logoutButton: Locator;

    //Variables
    private readonly page: Page;

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.logoutButton = page.getByRole('button', { name: 'Logout' })
    }

    //Actions
    async logout() {
        await this.logoutButton.click();
    }

    //Verifications
    async verifyThatUserIsLoggedIn() {
        await expect(this.logoutButton).toBeVisible();
    }
} 