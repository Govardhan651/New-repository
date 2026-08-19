let value = [27 , 27 , 75 , 83 , 4 , 25 , 100 , 200 , 300 , 400]
    for (let i=0; i<value.length;i++) {
       for (let j=i+1 ; j<value.length;j++){
        if (value[i] == value[j]){
       console.log(`duplicate number is ${value[j]}`)
    }
       }

    }
    
