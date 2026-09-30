import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
    constructor(private readonly page: Page) {}

    private cartItem(name: string): Locator {
        return this.page
            .getByTestId('inventory-item')
            .filter({ has: this.page.getByTestId('inventory-item-name').getByText(name, { exact: true }) });
    }

    async expectItemDetails(item: { name: string; quantity: string; price: string }): Promise<void> {
        await expect(this.page).toHaveURL(/\/cart\.html$/);
        await expect(this.page.getByText('Your Cart', { exact: true })).toBeVisible();

        const row = this.cartItem(item.name);
        await expect(row).toHaveCount(1);
        await expect(row.getByTestId('inventory-item-name')).toHaveText(item.name);
        await expect(row.getByTestId('item-quantity')).toHaveText(item.quantity);
        await expect(row.getByTestId('inventory-item-price')).toHaveText(item.price);
    }
}
