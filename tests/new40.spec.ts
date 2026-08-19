import { test as base } from '@playwright/test'

export const cfixture = base.extend<{ login: any }>({

    login: async ({ page }, use) => {

        await page.goto("https://login.salesforce.com/?locale=in")

        await page.fill(
            "#username",
            "reddygovardhan651.86b425b2c81a@agentforce.com"
        )

        // First click Log In
        await page.click("#Login")

        // Now Salesforce should display the password field
        await page.fill(
            "#password",
            "Gova@12345"
        )

        await page.click("#Login")

        await use(page)
    }

})