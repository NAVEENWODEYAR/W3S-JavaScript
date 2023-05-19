// constructor in JavaScript

class Test
{
    constructor(name)
    {
        this.name = name;
    }

    display()
    {
        console.log("Parent class method");
        console.log("My name is ", this.name);
    }
}

    class Test1 extends Test
    {
        age = 28;

        tell()
        {
            console.log("Child class method");
            console.log("My age is ",this.age);
        }
    }

    let obj = new Test1("Naveen");
    console.log(obj);

            obj.display()
            obj.tell();