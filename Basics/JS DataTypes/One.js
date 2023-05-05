// Data Types in JavaScript. 
// JavaScript has 8 data types- 1.Number 2.String 3.Boolean 4.Bigint 5.Undefined 6.Null 7.Symbol 8.JS Object
// JS Object - 1.JS Array  2. JS object 


//Numbers 
let n = 5;
 n = 'str'
let m = 4.50;
console.log(n + ' is '  + typeof (n));
console.log(m + ' is '  + typeof (m));

// String
var st = 'JavaScript';
var sr = "JavaScript";
console.log(st + " is " + typeof(st));
console.log(sr + " is " + typeof(sr));

// Boolean
let bl = true;
var b2 = false;
console.log(bl + " is " + typeof(bl));
console.log(b2 + " is " + typeof(b2));

// Undefined
let o;
// const j;
console.log(o + " is " + typeof(o));
// console.log(j + " is " + typeof(j));

// Null
let y = "";
let sb = "";
console.log(y + typeof(y));             // value is null but type is String;
console.log(sb + typeof(sb));


// JS Object
let ob = {id:1};
console.log(ob + " is " + typeof(ob));

// JS Array
var ar = [1,2,3,4];
console.log(ar + " is " + typeof(ar));
