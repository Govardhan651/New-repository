import { Homepage } from './new33';

class Leads extends Homepage {
    clickOnLeads() {
        console.log("Clicking on Leads");
    }
}

const lead = new Leads();
lead.loadUrl();
lead.loadUsername();
lead.loadPassword();
lead.clickLoginButton();
lead.clickCrmSfa();
lead.clickOnLeads();
