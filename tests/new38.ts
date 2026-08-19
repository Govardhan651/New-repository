import { Parent } from "./new37";

class Child extends Parent {
    
    phone(){
        console.log("smart phone")
        super.phone()
    }
    


}

let c = new Child()
c.phone()