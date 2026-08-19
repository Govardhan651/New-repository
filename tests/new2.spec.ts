import test from "@playwright/test"

test ("dropdown" , async({page})=>{

    await page.goto("https://leafground.com/select.xhtml;jsessionid=node019gyh6a37prxyxa01fojfdgok1885.node0")
   // await page.selectOption(".ui-selectonemenu",{label:"Playwright"})

   // await page.waitForTimeout(3000)

    await page.selectOption(".ui-selectonemenu",{index:1})
    await page.waitForTimeout(3000)
})

test.only("non select tag" , async({page})=>{
    await page.goto("https://leafground.com/select.xhtml;jsessionid=node019gyh6a37prxyxa01fojfdgok1885.node0")
    await page.locator("[id='j_idt87:country_label']").click()
    await page.locator("[id='j_idt87:country_2']").click()
    await page.waitForTimeout(3000)
})