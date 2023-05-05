// Javascript functions. 
// The code inside the function will execute when "something" invokes (calls) the function:
        // When an event occurs (when a user clicks a button)
        // When it is invoked (called) from JavaScript code
        // Automatically (self invoked)
    
        let a = 5, b = 5;
        function addNum()
        {
            console.log("Addition.")
            console.log(a+b);
        }
        addNum();

        // function with return,  returns the value back to the caller.
        var s = subNum();
        console.log(s);
        function subNum()
        {
            // console.log("Substraction: "+ (a-b));
            return ("Substraction: "+ (a-b));
        }


        // function as variables.
        var age = find_Age(1996);
        console.log("You are "+ age + " years old!");

            function find_Age(year)
            {
                age = 2023-year;
                return age;
            }