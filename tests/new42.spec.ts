import test from '@playwright/test'

test.beforeAll('read value' , ()=>{
    console.log("Read from json")
})

test.beforeEach('use storage' , ()=>{
    console.log("storage state")
})

test.afterEach('screen shot', ()=>{
    console.log("screen shot")
})

test.afterAll('close connection' , ()=>{
    console.log("conncection closed")
})

test('login page', ()=>{
    console.log("login page")
})