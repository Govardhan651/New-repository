function getgoto(url:string , wait : string , timeout : number){
    console.log(`${url} ${wait} ${timeout}`);
}

getgoto("https://www.google.com", "5s", 1000)
