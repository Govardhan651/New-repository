import test, { expect } from '@playwright/test'
import { info } from 'console'

let Id: any
test('automate 1' , async({request})=>{
 
    const response = await request.post("https://dev404897.service-now.com/api/now/table/incident" , {

        headers:{
            "Content-Type": "application/json",
            "Authorization": `Basic ${info}`,
        },
        data:{
            "short_description": "This is a test incident created using Playwright",
        }

        })

        const responseBody = await response.json()
        Id = responseBody.result.sys_id
        console.log(Id)

        expect(response.status()).toBe(201)
    })

    test ('automate2',async({request})=>{

        const response = await request.get(`https://dev404897.service-now.com/api/now/table/incident/${Id}` , {

          headers:{
            "Content-Type": "application/json",
            "Authorization": `Basic ${info}`  
          }
    })

    const responseBody = await response.json()
    console.log(responseBody)
    expect (response.status()).toBe(200)

    })
