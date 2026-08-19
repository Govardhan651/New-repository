export class Browser{

    browser: any;
    name: string="chrome";
    bversion:any

    lanunchBrowser(){
  console.log("lanuch browser")
}

constructor(bname:string , bversion:number){
    console.log(bname);
    console.log(this.bversion=bversion);
}

}

let obj = new Browser("firefox" , 10);
//console.log(obj.lanunchBrowser());
obj.lanunchBrowser();
