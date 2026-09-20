import { test, expect } from "@playwright/test";
import mockedRequest from "../../test-data/mockedRequest.json";
import mockedResponse from "../../test-data/mockedResponse.json";


test("Mocking Request Body TC", async ({ page }) => {
    // Your test code here
    await page.route('**/bycat', async route => {
        await route.continue(
            {
                postData: JSON.stringify(mockedRequest)
            }
        )
    });
    await page.goto('https://www.demoblaze.com/', { waitUntil: 'networkidle' })
    await page.getByRole('link', { name: 'Laptops' }).click()
});


test("Mocking Request Headers TC", async ({ page }) => {
    // Your test code here
    await page.route('**/bycat', async (route, request) => {
        const headers = {
            ...request.headers(), 'accept-language': 'ar-SA'
        }
        await route.continue(
            {
                headers
            }
        )
    });
    await page.goto('https://www.demoblaze.com/', { waitUntil: 'networkidle' })
    await page.getByRole('link', { name: 'Laptops' }).click()
});

test.skip("Mocking Request Headers TC2", async ({ page }) => {
    // Your test code here
    await page.route('**/bycat', async (route, request) => {
        console.log('Falling back to headers');
        const headers = {
            ...request.headers(), 'accept-language': 'ar-SA'
        }
        await route.fallback(
            {
                headers
            }
        )
    });
    await page.route('**/bycat', async (route, request) => {
        console.log('Falling back to GET method');
        await route.fallback(
            {
                method: 'GET'
            }
        )
    });
    await page.goto('https://www.demoblaze.com/', { waitUntil: 'networkidle' })
    await page.getByRole('link', { name: 'Laptops' }).click()
});

test.fail("Mocking Response TC", async ({ page }) => {
    // Your test code here
    await page.route('**/entries', async (route) => {
        await route.fulfill({
            contentType: 'application/json',
            body: JSON.stringify(mockedResponse)
        })
    });

    await page.goto('https://www.demoblaze.com/', { waitUntil: 'networkidle' })
});

test("Aborting Request TC", async ({ page }) => {
    await page.route('**/entries', async (route) => {
        await route.abort('internetdisconnected');
    });
    await page.goto('https://www.demoblaze.com/', { waitUntil: 'networkidle' })
});


