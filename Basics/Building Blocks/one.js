// JavaScript Variables.
// Variable are containers for storing the data.
   
    // x = 5;              
    // y = 5;
    // console.log(x+y);

    let x = 4;
    let y = 4;
    console.log(x + y);

    var s = 5;
    var t = 10;
    console.log(s + t);

    const a = 10;
    console.log(typeof (a));


    // variable declaration
    let student_Name;
    console.log(typeof (student_Name));         // undefined because it is not initialized.

    const student_id = 1;
    console.log(typeof (student_id));           // number 

    let computer_Name = "Lenovo";
    console.log(typeof (computer_Name));        // string

    let bike_Name = 'Honda';
    console.log(typeof (bike_Name));            // string

    let $ = 14;                                 // valid declaration 
    console.log($);
    console.log (typeof($)) ;


    // let & const have block level scope in javscript, i,e. defined inside the block can't be accessed outside.

    const s;                   // must be initialized or assigned.
    const PI = 3.14;
    PI = 3.15;              // error.