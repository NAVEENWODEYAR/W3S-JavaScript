// Class in JavaScript 

var emp = class
{
    id;
    name;
    constructor(a,b)
    {
        this.id = a;
        this.name = b;
    }

    disp()
    {
        console.log("Id ", this.id);
        console.log("Name ", this.name);
    }
}
    let e1 = new emp(1,"Class-1");
        e1.disp();

    