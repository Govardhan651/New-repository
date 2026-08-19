import test from '@playwright/test';

test('Frame locator', async ({ page }) => {
    await page.goto('https://leafground.com/frame.xhtml');

    const frame = page.frameLocator('iframe').first();
    await frame.locator('#Click').click();
    await page.waitForTimeout(3000);

});






test.only('Nested frame', async ({ page }) => {

    await page.goto('https://leafground.com/frame.xhtml');

    const frame = page.frame({
        url: 'https://leafground.com/framebutton.xhtml'
    });

    await frame?.locator('#Click').click();

    const message = await frame?.locator('#Click').innerText();

    console.log(message);

    await page.waitForTimeout(3000);
});