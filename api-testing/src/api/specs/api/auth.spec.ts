import { test, expect } from "@playwright/test";
import basicAuth from "../../endpoints/basicAuth";
import authData from "../../test-data/auth.json";

test("Basic Auth Test", async ({ request }) => {
    const response = await basicAuth(request, authData.user);
    console.log(await response.text());
});