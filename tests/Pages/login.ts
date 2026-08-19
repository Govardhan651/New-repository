import { Page } from '@playwright/test'

export class LoginPage {

    Page: Page

    constructor(page: Page) {
        this.Page = page
    }

    async loadUrl() {
        await this.Page.goto("http://leaftaps.com/opentaps/control/main")
    }

    async username() {
        await this.Page.fill("#username", "Demosalesmanager")
    }

    async password() {
        await this.Page.fill("#password", "crmsfa")
    }

    async login() {
        await this.Page.click(".decorativeSubmit")
    }
}