// reduce() - to reduce the size of the array 

    let num = [1,2,3,4,5]

    let new_Num = num.reduce((n,total)=>{
            return total = total+n;
    },0)
        console.log(new_Num);