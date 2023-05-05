// Difference between the fat arrow and normal function. 

    function add_No()
    {
        console.log(this);
    }
    add_No();

    // fatarrow function
    a =  () => 
    {
        console.log(this)
    }
    a()