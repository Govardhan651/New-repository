import { WelcomePage } from "./myhomepage"

export class HomePage extends WelcomePage {

    async clickonLeads() {
        await this.Page.click("//a[text()='Leads']")
    }
}