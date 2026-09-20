import { test, expect } from "@playwright/test";
import storeEndpoints from "../../endpoints/store-endpoints";
import storeTestData from "../../test-data/store.json";

//Test Cases
test("Register a new client", async ({ request }) => {
    const clientData = {
        clientName: `TestClient${Date.now()}`,
        clientEmail: `testclient${Date.now()}@example.com`
    };
    const response = await storeEndpoints.registerClient(request, clientData);
    console.log(await response.json());
});
/********************************************************* */
test("Create a new order", async ({ request }) => {
    //register a new client before creating an order
    const clientData = {
        clientName: `TestClient${Date.now()}`,
        clientEmail: `testclient${Date.now()}@example.com`
    };
    const response = await storeEndpoints.registerClient(request, clientData);
    console.log(await response.json());
    const token = (await response.json()).accessToken;

    //create a new Cart 
    const cartResponse = await storeEndpoints.createCart(request);
    console.log(await cartResponse.json());
    const cartId = (await cartResponse.json()).cartId;

    //Add items to the cart
    const item = {
        productId: 1225
    };
    const addItemResponse = await storeEndpoints.addItemToCart(request, cartId, item);
    console.log(await addItemResponse.json());

    //Create a new order
    const orderData = {
        cartId: cartId,
        customerName: clientData.clientName
    };
    const orderResponse = await storeEndpoints.createOrder(request, token, orderData)
    console.log(await orderResponse.json());
});

