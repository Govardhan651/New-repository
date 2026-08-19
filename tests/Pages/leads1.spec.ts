import { test } from '@playwright/test'
import { HomePage } from './HomePage'

test('click on leads', async ({ page }) => {

    const mhp = new HomePage(page)
   await  mhp.loadUrl()
    await mhp.username()
   await  mhp.password()
   await  mhp.login()
   await  mhp.clickCRMSFA()
   await  mhp.clickonLeads()
})