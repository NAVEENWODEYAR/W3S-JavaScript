
// map()
let num = [1,2,3,4,5];
let num2 = num.map((n)=>{           // creating a new array with the previous array
    return n*2;
})
console.log("Original Arry ",num);
console.log("New Array ",num2);

 let num3 = num.filter((n)=>{
    if(n%2 == 0)
    return n;
 })
console.log(num3);