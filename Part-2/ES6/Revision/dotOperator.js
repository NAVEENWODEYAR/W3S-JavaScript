// (...) operator acts as spread and rest 

let a = [];

    for (let i=0; i<=10; i++)
    {
        a.push(i);
    }
    console.log(a);

    console.log(...a,11,12);       // spread operator
    let b = [15,17,19];
    console.log(...a,...b);



    console.log("@@@@Rest operation@@@@@@");
    function add_No(a,b,c)
    {
        console.log("First Number",a);
        console.log("Second Number",b);
        console.log("Third Number",c);
        return ("Sum: "+(a+b+c));
    }
    let r = add_No(1,2,3);
    console.log(r);

    console.log("Rest operator...")
    function add_Nos(a,b,...c)
    {
        console.log("First Number",a);
        console.log("Second Number",b);
        console.log("Third Number",c);
        return "UNDEFINED";
    }
    let r1 = add_Nos(1,2,3,4,5);
    console.log(r1);