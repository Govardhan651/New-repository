import { LoginPage } from "./login"

export class WelcomePage extends LoginPage {

    async clickCRMSFA() {
        await this.Page.click("//a[contains(text(),'CRM/SFA')]")
    }
}