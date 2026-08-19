let empname = ["John", "Jane", "Bob" , "Alice", "Tom", "Jerry"];
console.log(empname[4])

//length of array
console.log("length of array: " + empname.length)
 //add the values
 empname[7] = "jack";
 console.log(empname[7])
 console.log("length of array: " + empname.length)
 console.log(empname[6])
 empname[6] = "jill";
 for (let i=0; i<empname.length;i++){
    console.log(empname[i])
 }

 empname.push("james");
 console.log(empname)
 empname.unshift("charlie");
 console.log(empname)
 empname.pop();
 console.log(empname)
 empname.shift();
 console.log(empname)
 empname.splice(3 , 2 , "mike", "susan");
 console.log(empname)

 let arr=[1,2,3,4,5,6,7,8,9,10]
 for (let val of arr){
    console.log(val)
 }

 let data = ["chorome" , true , 132.8]
 data[5]="webkit"
console.log(data)
data.push("firefox")
console.log(data)
data.shift()
console.log(data)

for (let val of data){
    console.log(val)
}