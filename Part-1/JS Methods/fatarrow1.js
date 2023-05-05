// Difference between the fat arrow and normal function. 

    function add()
    {
        console.log("Normal Function.");
        console.log(this);
    }
   add();

    let a = ()=> 
    {
        console.log("Fat arrow Function.");
        console.log(this);
    }
    a();