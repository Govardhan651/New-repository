import test from '@playwright/test'
import { LoginPage } from './new44'

test('login wrapper methods' , async({page})=>{

    const lp = new LoginPage(page)
    await lp.launchApp("http://leaftaps.com/opentaps/control/main")
    await lp.loginData("Demosalesmanager" , "crmsfa")
    await lp.clickLogin()
})