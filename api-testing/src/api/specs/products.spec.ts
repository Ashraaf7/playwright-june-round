import { test, expect } from "@playwright/test";
import productsEndpoints from "../enpoints/products-endpoints";
import productTestData from "../test-data/products.json";

/** Test Cases */
test('Create a new product', async ({ request }) => {
    const response = await productsEndpoints.createProduct(request, productTestData.toBeCreated);
    console.log(await response.json());
});
/********************************************************* */
test('Get all products', async ({ request }) => {
    const response = await productsEndpoints.getAllProducts(request);
    console.log(await response.json());
});
/********************************************************* */
test('Get product by query', async ({ request }) => {
    const response = await productsEndpoints.getProductByQuery(request, productTestData.query);
    console.log(await response.json());
});
/********************************************************* */
test('Get product by path', async ({ request }) => {
    const response = await productsEndpoints.getProductByPath(request, productTestData.id);
    console.log(await response.json());
});
/********************************************************* */
test('Update product by ID', async ({ request }) => {
    const response = await productsEndpoints.updateProduct(request, productTestData.toBeUpdated.id, productTestData.toBeUpdated.data);
    console.log(await response.json());
});
/********************************************************* */
test('Delete product by ID', async ({ request }) => {
    const response = await productsEndpoints.deleteProduct(request, productTestData.toBeDeleted.id);
    console.log(await response.json());
}); 