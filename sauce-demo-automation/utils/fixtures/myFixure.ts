import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { ProductsPage } from '../../pages/products';

type fixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
};

export const test = base.extend<fixtures>(
    {
        loginPage: async ({ page }, use) => {
            //pre conditions
            const login = new LoginPage(page);
            await login.goToLoginPage();
            await login.login('standard_user', 'secret_sauce');

            //use the fixture
            await use(login) //calling test case

            //teardown if needed
            const product = new ProductsPage(page);
            await product.logout();
        },
        productsPage: async ({ loginPage, page }, use) => {
            //pre conditions
            const products = new ProductsPage(page);
            await products.navigateToProductsPage();
            //use the fixture
            await use(products); //calling test case
            console.log('Teardown for productsPage fixture completed');
        }
    }
)