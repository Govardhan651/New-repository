import test from '@playwright/test'

test('alert' , async({page})=>{

    await page.goto("https://leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()
})

test.only ('handle alert', async({page})=>{
  await page.goto("https://leafground.com/alert.xhtml")
    //await page.locator("//span[text()='Show']").first().click()

    page.once('dialog', async dialog => {
        console.log("Type :", dialog.type());
        console.log("Message :", dialog.message());

        await dialog.accept();
})

await page.locator("//span[text()='Show']").first().click()

})