// A closure can be defined as a JavaScript feature in which the inner function has access to the outer function variable.

function add_No()
{
    a = 5;
    b = 5;

        function sub_No()
        {
            console.log("Differbce between the numbers is: ",a-b);
        }
        sub_No();
    console.log("Sum of the numbers ", a+b);
}
add_No();

let d1 = "March,06,1996";
let d2 = Date.parse(d1);            // returns the number of miliseconds.
console.log(d2);