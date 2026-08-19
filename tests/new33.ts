import { Login } from "./new32";
import { Logout } from "./new35";

export class Homepage extends Login {
  clickCrmSfa() {
    console.log("clicking on CRM/SFA");
  }
}

const home = new Homepage();

home.loadUrl();
home.loadUsername();
home.loadPassword();
home.clickLoginButton();
home.clickCrmSfa();

const log = new Logout();
log.loadUrl();
log.loadUsername();
log.loadPassword();
log.clickLoginButton();
log.clickLogoutButton();