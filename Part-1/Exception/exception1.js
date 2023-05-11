// Exception handling in JavaScript 

try
{
    let a = []= "";
    for (let i=0; i<=10; i++)
    {
        console.log(a.push(i));
    }
    console.log(a);
    throw new Error ("Trying to initialize the array values using the for loop.");
}
catch(e)
{
    console.log("Error is: ", e.message);
}