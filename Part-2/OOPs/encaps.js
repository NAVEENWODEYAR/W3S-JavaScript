// JavaScript Encapsulation using var

class Encaps 
{
    constructor()
    {
        var name;
        var marks;
    }
    
    get_Name()
    {
        return this.name;
    }

    set_Name(name)
    {
        this.name = name;
    }

    get_Marks()
    {
        return this.marks;
    }

    set_Marks(marks)
    {
        if(marks <=0 || marks >= 100)
        {
            console.log("Invalid marks!");
        }
        else
        {
            this.marks = marks;
        }
    }
}

let e1 = new Encaps();
     e1.set_Name("Emma Watson");
console.log(e1.get_Name());
    e1.set_Marks(94);
console.log(e1.get_Marks());


let e2 = new Encaps();
e2.set_Name("Jenifer");
console.log(e2.get_Name());
    e2.set_Marks(-7);
console.log(e2.get_Marks());
