
// let calculator = ((a,b, oprn)=>{
//     if (oprn == "sum")
//         return a+b;
//     if (oprn == "sub")
//         return a-b;
//     if (oprn == "multi")
//         return a*b;
// })

// let sum = calculator(5,4,"sum");
// console.log("Addition: ", sum);

// let differrence = calculator(5,4,"sub");
// console.log("Addition: ", differrence);

// let product = calculator(5,4,"multi");
// console.log("Product: ",product);

// passing number & function(callback) as arguments to the function.
console.log("CallBack");
let sum = (a,b)=>{
    return a+b;
}

let product = (a,b)=>{
    return a*b;
}

let cal = (a,b,callback)=>{
    return callback(a,b);
}

let r1 =cal(10,10,sum);
console.log(r1);
let r2 = cal(10,10,product);
console.log(r2); 