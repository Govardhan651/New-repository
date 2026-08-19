import { Page } from "@playwright/test";
import { Agent } from "node:http";

export abstract class WrapperMethod{

    page:Page

    constructor (page:Page){
        this.page=page
    }

    async type(locator: string , value:string){
        const data = this.page.locator(locator)
        await data.fill(value)
    }

    async click(locator:string){
        const clc = this.page.locator(locator)
        await clc.click()
    }

    async launchApp(url:string){
        await this.page.goto(url)
    }
}