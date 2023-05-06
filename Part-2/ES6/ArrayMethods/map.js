// Map() - iterates the array & executes the function array length times.

    let emp = ["Annie","Backy","Clara","Daiyana","Emma"];
    let new_Emp = emp.map((e)=>{
            // console.log(e);                  // Iterates the array
            // return e.toUpperCase();             // pass the result to the calling array.
            return e.length;                // pass the result to the calling array.
    });
    console.log(new_Emp);