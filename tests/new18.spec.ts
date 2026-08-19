import test from '@playwright/test'

test ('download' , async({page})=>{

    await page.goto("https://leafground.com/file.xhtml");

    const download = page.waitForEvent('download')
     await page.locator("//span[text()='Download']").click();

     const filedownload = await download;

     await filedownload.saveAs("utils/" + filedownload.suggestedFilename())
})