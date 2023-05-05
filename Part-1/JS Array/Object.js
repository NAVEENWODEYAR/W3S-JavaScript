// How to check weather js object is empty or not. 
    let ob = {id:1,name:"Kyle",sal:1234}
    console.log(typeof  ob);
    console.log(ob);
    // console.log(ob.length);          // length is only applicable to array.
    let oe = Object.keys(ob);           // to check the length it should be an array.
    console.log(oe.length);
        //checking the object wether it is empty or not.
        if(oe.length < 0)
        {
            console.log("Empty");
        }
        else
        {
            console.log("Not Empty");

        }