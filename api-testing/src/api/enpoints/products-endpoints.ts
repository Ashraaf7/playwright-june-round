import { APIRequestContext } from "@playwright/test";
const BASE_URL = 'https://api.restful-api.dev';
const PRODUCTS_ENDPOINT = `${BASE_URL}/objects`;

//CRUD operations for products endpoint
//Create Product
async function createProduct(request: APIRequestContext, productData: any) {
    return await request.post(PRODUCTS_ENDPOINT, {
        data: productData
    })
}
/*************************************************************** */
//Get All Products
async function getAllProducts(request: APIRequestContext) {
    return await request.get(PRODUCTS_ENDPOINT)
}
/*************************************************************** */
//Get Product by ID as a query parameter
async function getProductByQuery(request: APIRequestContext, query: any) {
    return await request.get(PRODUCTS_ENDPOINT, {
        params: query
    });
}
/*************************************************************** */
//Get Product by ID as a path parameter
async function getProductByPath(request: APIRequestContext, productID: any) {
    return await request.get(`${PRODUCTS_ENDPOINT}/${productID}`);
}
/*************************************************************** */
//Update Product by ID
async function updateProduct(request: APIRequestContext, productID: any, updatedProduct: any) {
    return await request.put(`${PRODUCTS_ENDPOINT}/${productID}`, {
        data: updatedProduct
    });
}
/*************************************************************** */
//Delete Product by ID
async function deleteProduct(request: APIRequestContext, productID: any) {
    return await request.delete(`${PRODUCTS_ENDPOINT}/${productID}`);
}
/*************************************************************** */


export default {
    createProduct,
    getAllProducts,
    getProductByQuery,
    getProductByPath,
    updateProduct,
    deleteProduct
};