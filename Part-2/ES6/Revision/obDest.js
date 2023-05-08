// Object Destruction 

let car ={Name:"Mustang",Brannd:"Ford",Color:"White",Engine:{cc:1800,hp:950}};
console.log("Object Destruction");
console.log(car);
console.log(car.Name);
// console.log(Name);              // Error - Name is undefined

console.log("After the Object Destructuring");
let {Name,Brannd,Color,Engine} = car;
console.log(Name);              

let {cc,hp} = Engine;
console.log(hp);