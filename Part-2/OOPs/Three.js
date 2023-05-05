// Inheritance in JS

class A
{
    id = 1;
    Name = 'Jenifer';
}

    class B extends A
    {
        disp()
        {
            console.log("Inheritance.");
        }
    }
        let b1 = new B();
            console.log(b1.id);
            console.log(b1.Name);
            b1.disp();