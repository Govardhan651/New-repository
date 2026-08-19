import test from '@playwright/test'

test.describe('My Test Suite', () => {

    test.describe.configure({mode: 'default' , retries: 2});

    test('sales', async({page})=>{
       await page.goto("https://www.amazon.in/")
    
    })
    
    test ("search", async({page})=>{
    
        page.goto("https://www.flipkart.com/")
        await page.getByPlaceholder("Enter Email/Mobile number...").fill("test@example.com")
    })
    
    test ('fail' , async({page})=>{
    
        await page.goto("https://www.flipkart.com/")
        await page.locator("test").click()
    })
})