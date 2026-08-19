import { test } from '@playwright/test';

test('login', async ({ page }) => {

    await page.goto('https://login.salesforce.com/?locale=in');

    await page.locator('#username').click();
    await page.locator('#username').pressSequentially(
        'dilipkumar.rajendran@testleaf.com',
        { delay: 100 }
    );

    await page.locator('#password').click();
    await page.locator('#password').pressSequentially(
        'Testleaf@2025',
        { delay: 100 }
    );

    await page.locator('#Login').click();

    await page.waitForTimeout(5000);
});