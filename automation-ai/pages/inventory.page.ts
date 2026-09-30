import { type Locator, type Page } from '@playwright/test';

export class InventoryPage {
    readonly cartLink: Locator;

    constructor(private readonly page: Page) {
        this.cartLink = page.getByTestId('shopping-cart-link');
    }

    async addProductToCart(addToCartTestId: string): Promise<void> {
        await this.page.getByTestId(addToCartTestId).click();
    }

    async openCart(): Promise<void> {
        await this.cartLink.click();
    }
}
