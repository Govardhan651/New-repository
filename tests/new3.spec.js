"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("assertions", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await (0, test_1.expect)(page.getByPlaceholder("Username")).toBeVisible();
});
test_1.test.only("asserion2", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    const actValue = await page.title();
    const expValue = "leaftaps - TestLeaf Automation Platform";
    test_1.expect.soft(actValue).toEqual(expValue);
    console.log("Title is matching");
});
