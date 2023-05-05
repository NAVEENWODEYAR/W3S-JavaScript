class Employee
{
    e_Id;
    e_Name;
        constructor(a,b)
        {
          console.log("Constructor is a special function to initialize the objects.")
            this.e_Id = a;
            this.e_Name = b;
        }
}
    let e1 = new Employee(1,"Anjelina");
    let e2 = new Employee(2,"Bella");
    let e3 = new Employee(3,"Carolina");
    let e4 = new Employee(4,"Diana");

    console.log("Employee ID: ", e1.e_Id, "Employee Name: " , e1.e_Name);
    console.log("Emoloyee Id: ", e2.e_Id, "Emloyee Name: ",e3.e_Name);