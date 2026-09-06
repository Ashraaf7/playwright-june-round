import { FullConfig, chromium, selectors } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';



async function globalSetup(config: FullConfig) {
    const { baseURL, storageState, testIdAttribute } = config.projects[0].use;

    //browser preparation
    selectors.setTestIdAttribute(testIdAttribute as string);
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ baseURL });
    const page = await context.newPage();

    //Login steps
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

    //save storage state
    await context.storageState({ path: storageState as string });

    //close browser after saving storage state
    await browser.close();
}

export default globalSetup;