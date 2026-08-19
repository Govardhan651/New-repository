let details : string | number
details = "Govardhan"
details = 25

// intersection

let data : boolean & string

type admin ={
    adminid: string,
    adminpassword: string
}

type customer ={
    customerid: string,
    customerpassword: string
    customerstatus: boolean
}

type db = admin & customer
let login : db={
    adminid: "demo",
    adminpassword: "demo",
    customerid: "sales",
    customerpassword: "sfa",
    customerstatus: true
}

console.log(login)