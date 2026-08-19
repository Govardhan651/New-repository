import test from "@playwright/test"

test('sales', async({page})=>{
   await page.goto("https://www.amazon.in/")
   await page.waitForTimeout(5000)

})

test.skip ("search", async({page})=>{

    page.goto("https://www.flipkart.com/")
    await page.getByPlaceholder("Enter Email/Mobile number").fill("test@example.com")
})

test.fail ('fail' , async({page})=>{

    await page.goto("https://www.flipkart.com/")
    await page.locator("test").click()
})

test.fixme('fixme', async({page})=>{

    await page.goto("https://www.amazon.in/")
    await page.locator("twotabsearchtextbox").fill("phone")})

    test.only('add info', async ({ page }) => {

    test.info().annotations.push(
        { type: 'issue', description: 'This is a test issue' },
        { type: 'author', description: 'Govardhan Reddy' }
    );

    await page.goto("https://www.amazon.in/");

    await test.info().attach('screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png'
    });

        })

    