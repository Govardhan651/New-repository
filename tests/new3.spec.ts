import { test, expect } from '@playwright/test';

test("assertions", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await expect(page.getByPlaceholder("Username")).toBeVisible();

});

test.only ("asserion2" , async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    const actValue = await page.title()
    const expValue = "leaftaps - TestLeaf Automation Platform"
    expect.soft (actValue).toEqual(expValue)
    console.log("Title is matching")
})