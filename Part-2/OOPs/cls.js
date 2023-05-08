// Class in JavaScript 

class Employee 
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
        console.log("Id: ", this.id);
        console.log("Name: ", this.name);
    }
}

    let emp = new Employee(1,"Lilly");
        emp.disp();