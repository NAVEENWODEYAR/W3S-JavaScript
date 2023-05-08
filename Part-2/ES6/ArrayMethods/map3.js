// Create a new arry using the existing array using for-each loop
   
let numbers = ["one","two","three","four","five"];
    // for each loop
       let new_numbers = numbers.forEach( (number) => 
        {
            // new_arr.push(ar);
            return number.toUpperCase();
       });

    console.log(new_numbers);
    console.log(numbers);


    let enames = ["nagraj", "naveen", "sreenu", "monohar"]

//construct new array - with upper case letter

let new_Enames = enames.forEach(ename => {
    return ename.toUpperCase()
})
console.log(enames)
console.log(new_Enames)

