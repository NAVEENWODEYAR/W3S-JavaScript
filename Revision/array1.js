

let emp = ["Ammie","Bella","Clara","Diana","Emma","Florence","Gordner","Helen"];

// console.log(emp);

    emp.pop();

console.log("Length of the array: ",emp.length);

for(let i=7; i>=emp.length; i--)
{
    emp.pop();
}
console.log("After removing the elements, size of the array is ",emp.length);
console.log("After removing the elements fron the arry ",emp);

