// Classes and objects.

class Car
{
    car_Id;
    car_Name;

    car_Price(a,b)
    {
        this.car_Id = a;
        this.car_Name = b;
        console.log("Object oriented programming in JavaScript.");
    }
}
    // object creation
    let  c1 = new Car();
        c1.car_Price(10,"Porshe");
        console.log(c1.car_Id);
        console.log(c1.car_Name);