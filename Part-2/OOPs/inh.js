// Inheritance is mainly for code re-usability 

class Tm extends Date 
{
    msg()
    {
        console.log("Inheritance, IS-A relationship.");
        console.log("Displaying the present date using the Date class from the class object");
    }
}
let t = new Date();
let date = t.getDay();
let d = t.getTime();
console.log(date);
console.log(t);
