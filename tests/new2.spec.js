"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("@playwright/test"));
(0, test_1.default)("dropdown", async ({ page }) => {
    await page.goto("https://leafground.com/select.xhtml;jsessionid=node019gyh6a37prxyxa01fojfdgok1885.node0");
    // await page.selectOption(".ui-selectonemenu",{label:"Playwright"})
    // await page.waitForTimeout(3000)
    await page.selectOption(".ui-selectonemenu", { index: 1 });
    await page.waitForTimeout(3000);
});
test_1.default.only("non select tag", async ({ page }) => {
    await page.goto("https://leafground.com/select.xhtml;jsessionid=node019gyh6a37prxyxa01fojfdgok1885.node0");
    await page.locator("[id='j_idt87:country_label']").click();
    await page.locator("[id='j_idt87:country_2']").click();
    await page.waitForTimeout(3000);
});
