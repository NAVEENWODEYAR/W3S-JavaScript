

let grades = ["A","B","C","D","E"];
console.log(grades,grades.length);

// while(grades.length)
// {
//     grades.pop();
// }
// console.log(grades,grades.length);   


for(let i=0; i<grades.length; i++)
{
    // console.log(grades[i]);
    grades.pop();
}
console.log(grades);