import { WrapperMethod } from "./new43";

export class LoginPage extends WrapperMethod{

    async loadUrl(url:string){
        await this.launchApp(url)
    }

    async loginData(username: string , password : string){
        await this.page.type("#username" , "Demosalesmanager")
        await this.page.type("#password" , "crmsfa")
    }

    async clickLogin(){
        await this.click(".decorativeSubmit")
    }
}