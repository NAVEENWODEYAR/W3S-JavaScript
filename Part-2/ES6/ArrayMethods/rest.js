// (...) acts as both Spread & Rest operator. 

let emp = [1,2,3,4];
let new_Emp = [...emp,5,6,7]
console.log("*****");
console.log("Original Array ",emp);
console.log("New Array using spread ",new_Emp);


console.log("**Without Rest Operator**");
    function add_No(a,b,c)
    {
        console.log(a);
        console.log(b);
        console.log(c);
    }
    add_No(1,2,3);
    add_No(1,2,3,4);
    add_No(1,2,3,4,5);
    add_No(1,2,3,4,5,6);
    add_No(1,2,3,4,5,6,7);
    add_No(1,2,3,4,5,6,7,8);

console.log("**With Rest Operator**");
    function add_Nos(a,b,...c)
    {
        console.log(a);
        console.log(b);
        console.log(c);
    }
    add_Nos(1,2,3);
    add_Nos(1,2,3,4);
    add_Nos(1,2,3,4,5);
    add_Nos(1,2,3,4,5,6);
    add_Nos(1,2,3,4,5,6,7);
    add_Nos(1,2,3,4,5,6,7,8);

