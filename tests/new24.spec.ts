import dotenv from 'dotenv'
import test from '@playwright/test'

let readEnv = process.env.envFile || 'prod'

dotenv.config({ path: `./utils/${readEnv}.env` })

test ('login with env' , async ({page})=>{

    console.log(process.env.SF_Username);

    const Uname = process.env.SF_Username as string
    const Pword = process.env.SF_Password as string
  
    await page.goto('https://login.salesforce.com/?locale=in');

        await page.locator('#username').fill(Uname);

        await page.locator('#password').fill(Pword);

        await page.locator('#Login').click();
})