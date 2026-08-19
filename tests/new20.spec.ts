import test from '@playwright/test';

test.use({
    storageState: 'utils/salesforce_login.json'
});

test('skip login', async ({ page }) => {

    await page.goto(
        'https://testleaf.lightning.force.com/lightning/page/home'
    );

    console.log(await page.url());
    console.log(await page.title());

    await page.screenshot({
        path: 'utils/salesforce.png'
    });

    await page.waitForTimeout(5000);
});