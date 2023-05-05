// Create new array from the existing array - using for-of loop

 let numbers = ['One','two','three','four','five'];
    let new_numbers = [];
        // for-of
        for( num of numbers)
        {
            new_numbers.push(num.toUpperCase());
        }
    console.log("Original Array: ",numbers);
    console.log("New Array: ",new_numbers);


    // Create a new array using the existing array - using for-of loop

    let emp = ["Ana","Bella","Clara","Diana","Emma"];
    let new_Emp = [];
        // for-of
        for(e of emp)
        {
            new_Emp.push(e.toUpperCase());
        }

        console.log(emp);
        console.log(new_Emp);

       