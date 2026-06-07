//env= Chrome serve=prod

let browser: string = "Firefox";

switch (browser) {
    case "Chrome":
        console.log("You are using Google Chrome.");
        break;
    case "Firefox":
        console.log("You are using Mozilla Firefox.");
        break;
    case "Safari":
        console.log("You are using Apple Safari.");
        break;
    default:
        console.log("Unknown browser.");
}