import { APIRequestContext } from '@playwright/test';


const BASE_URL = "https://the-internet.herokuapp.com/";
const BASIC_AUTH_URL = `${BASE_URL}/basic_auth`;

async function basicAuth(request: APIRequestContext, user) {
    return await request.get(BASIC_AUTH_URL, {
        headers: {
            'Authorization': `Basic ${Buffer.from(`${user.username}:${user.password}`).toString('base64')}`
        }
    });
}


export default basicAuth;