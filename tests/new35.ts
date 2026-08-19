import { Login } from './new32';

export class Logout extends Login{

    clickLogoutButton(){
        console.log("Clicking on Logout Button");
    }


}

let logout = new Logout();
logout.loadUrl();
logout.loadUsername();
logout.loadPassword();
logout.clickLoginButton();
logout.clickLogoutButton();