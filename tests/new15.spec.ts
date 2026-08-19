import test , {chromium} from '@playwright/test'

test('multiple window' , async()=>{

    const browser = await chromium.launch({channel: 'chrome'})
    const context = await browser.newContext()
    const page = await context.newPage()
    const page1 = await context.newPage()

    await page.goto("https://www.google.com/")
    console.log("Page title is: "+await page.title())
    await page.waitForTimeout(3000)

    await page1.goto("https://www.facebook.com/")
    console.log("Page title is: "+await page1.title())
    await page1.waitForTimeout(3000)
})



test.only('single window', async () => {

    const browser = await chromium.launch({
        channel: 'chrome',
        headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.amazon.in/');

    await page.locator('#twotabsearchtextbox').fill('phone');
    await page.keyboard.press('Enter');

    await page.waitForLoadState('networkidle');

    await page.locator("text='realme narzo 100 Lite 5G'").click();

    console.log(await page.title());

    await page.waitForTimeout(5000);

    await browser.close();
});
