"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("@playwright/test"));
(0, test_1.default)("login", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator("[name='USERNAME']").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    const title = await page.title();
    console.log(title);
    await page.locator("text='CRM/SFA'").click();
    const title1 = await page.title();
    console.log(title1);
});
