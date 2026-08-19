import { cfixture } from "./new40.spec";

cfixture("app launcher", async ({ login }) => {

    console.log("Current URL:", login.url());
    console.log("Page title:", await login.title());

    await login.screenshot({
        path: "salesforce-after-login.png",
        fullPage: true
    });

    console.log(
        "Waffle count:",
        await login.locator(".slds-icon-waffle").count()
    );

});