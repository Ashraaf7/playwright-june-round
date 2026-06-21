export class LoginPage {
    private usernameLocator: string = "ahmed";
    private passwordLocator: string = "asasasasas";
    private loginButtonLocator: string = "";


    private clickLoginButton(): void {
        console.log(`Clicking login button: ${this.loginButtonLocator}`);
    }

    //Variables 
    //Wait wait = new Wait();

    login(username: string, password: string): void {
        console.log(`Typing username: ${this.usernameLocator}`);
        console.log(`Typing password: ${this.passwordLocator}`);
        this.clickLoginButton();
    }

}


//Test case
//const loginPage = new LoginPage();
//loginPage.login("", "");


