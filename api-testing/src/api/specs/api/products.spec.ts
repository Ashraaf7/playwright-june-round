import { test, expect } from "@playwright/test";
import productsEndpoints from "../../endpoints/products-endpoints";
import productTestData from "../../test-data/products.json";

/** Test Cases */
test('Create a new product', async ({ request }) => {
    const response = await productsEndpoints.createProduct(request, productTestData.toBeCreated);
    const resposeBody = await response.json();
    console.log(resposeBody);
    expect(resposeBody.name).toBe(productTestData.toBeCreated.name);
});
/********************************************************* */
test('Get all products', async ({ request }) => {
    const response = await productsEndpoints.getAllProducts(request);
    console.log(await response.json());
});
/********************************************************* */
test('Get product by query', async ({ request }) => {
    const response = await productsEndpoints.getProductByQuery(request, productTestData.query.data);
    const resposeBody = await response.json();
    console.log(resposeBody);
    expect(resposeBody[0].name).toBe(productTestData.query.expectedName);
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