import test from '@playwright/test'

test ("login" , async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("[name='USERNAME']").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

    const title = await page.title()
    console.log(title)

    await page.locator("text='CRM/SFA'").click()
    const title1 = await page.title()
    console.log(title1)
})