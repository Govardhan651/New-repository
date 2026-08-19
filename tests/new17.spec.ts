import test from '@playwright/test'

test('file upload', async ({ page }) => {

    await page.goto("https://leafground.com/file.xhtml");

    await page
        .locator("//span[text()='Choose']/following-sibling::input")
        .first()
        .setInputFiles("./utils/03_Fibonacci Series-TypeScript.pdf");

    await page.waitForTimeout(3000);

});




test.only('file upload using event listener', async ({ page }) => {

    await page.goto('https://leafground.com/file.xhtml');

    const fileupload = page.waitForEvent('filechooser');


    await page
        .locator("//span[text()='Choose']/following-sibling::input")
        .first()
        const upload= await fileupload
        await upload.setFiles("./utils/03_Fibonacci Series-TypeScript.pdf");

    await page.waitForTimeout(3000);
});

