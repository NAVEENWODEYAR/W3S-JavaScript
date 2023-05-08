// ES-6 Array methods- map(), foreach(),reduce(),filter().

    // array with elements.
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        // for loop to iterate the array.
        for (let i=1; i<= arr.length; i++)
        {
            console.log(i);
        }

            // for - in to iterate the array.
            for (a in arr)
            {
                console.log(arr[a]);
            }

         arr.map(()=>
         {
            return arr;
         })