import test from '@playwright/test'

test ('new alert', async({page})=>{

    page.on('dialog', Type=>{
        const type = Type.type()    
        console.log(type);

        if (type==='alert'){
            Type.accept()
        }
        else if (type==='confirm'){
            Type.accept()
        }
        else {
            Type.dismiss()
        }
    })
    await page.goto("https://leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()
    await page.locator("//span[text()='Show']").nth(1).click()
    await page.locator("//span[text()='Show']").nth(4).click()
    await page.locator("//span[text()='Show']").nth(2).click()
    await page.locator("//span[text()='Show']").nth(3).click()

})