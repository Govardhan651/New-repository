import test from '@playwright/test'

import value from './utils/login.json';

for (const login of value) {
 test (`read value from JSON file ${login.TC_Id}`, async ({ page }) => {
 
    await page.goto('https://login.salesforce.com/?locale=in');

        await page.locator('#username').fill(login.Username);

        await page.locator('#password').fill(login.Password);

        await page.locator('#Login').click();
})
}