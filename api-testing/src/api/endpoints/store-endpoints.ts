import { APIRequestContext } from "@playwright/test";

const BASE_URL = "https://simple-grocery-store-api.click";
const REGISTRATION_URL = `${BASE_URL}/api-clients`;
const CART_URL = `${BASE_URL}/carts`;
const ITEM_ENDPOINT = `/items`;
const ORDER_URL = `${BASE_URL}/orders`;

// Create a new client
async function registerClient(request: APIRequestContext, clientData: any) {
    return await request.post(REGISTRATION_URL, {
        data: clientData
    })

}
/********************************************************* */
//Create a new Cart
async function createCart(request: APIRequestContext) {
    return await request.post(CART_URL)
}
/********************************************************* */
// Add items to the cart
async function addItemToCart(request: APIRequestContext, cartId, item) {
    return await request.post(`${CART_URL}/${cartId}${ITEM_ENDPOINT}`, {
        data: item
    });
}
/*********************************************************/
// Create a new order
async function createOrder(request: APIRequestContext, token, orderData) {
    return await request.post(`${ORDER_URL}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: orderData
    });
}

export default {
    registerClient,
    createCart,
    addItemToCart,
    createOrder
};