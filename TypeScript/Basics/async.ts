function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("delayed");
            resolve("resolved");
        }, 3000);
    });
}

async function acyns_await_print() {
    console.log("1");
    console.log("2");
    await delay();
    console.log("3");
    console.log("4");
}
acyns_await_print();


async function login() {
    const email = Locator("#email");
    await page.goto("https://www.facebook.com/");
    await page.type("#email", "your_email");
    await page.type("#pass", "your_password");
    await page.click("button[name='login']");
}

function acyns_print() {
    console.log("1");
    console.log("2");
    setTimeout(() => console.log("pending"), 3000); //wait for 3 seconds and then print pending
    console.log("3");
    console.log("4");
}
acyns_print();

function sync_print() {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
}

sync_print();
