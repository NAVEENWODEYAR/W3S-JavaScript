// callback - passing an function as parameter to the other function

console.log("Callback Function.")
function add_No(a,b,callback)
{
    console.log("Sum of the numbers: ",a+b);
    callback();
    // sub_No();
}

function sub_No()
{
    a = 5;
    b = 5;
    console.log("Difference between the numbers:",a-b);
}

add_No(5,5,sub_No);