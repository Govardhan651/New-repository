import test from '@playwright/test'

test('frame', async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml")
    const totalFrame = page.frames()
    console.log("Total number of frames in the page: "+totalFrame.length)

    const frame1 = totalFrame[1]
    await frame1.locator("#Click").click()
    await page.waitForTimeout(3000)

    const nested= totalFrame[4]
    await nested.locator("#Click").click()
    await page.waitForTimeout(6000)

})