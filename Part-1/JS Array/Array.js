// How to check wether the javascript array is empty or not. 

    let arr = [1,2,3,4,5,6,7,8,9];
    console.log(arr);
    console.log("Length of the given arry: "+ arr.length);
    console.log("Iterating through the array");
        for (elements in arr)
        {
            console.log(elements);
        }

        // Checking the arry for its size.
            if(arr.length >0)
            {
                console.log("The Array is not Empty.");
            }
            else
            {
                console.log("The Array is Empty.");

            }