//  Class is created in JavaScript using the keyword class. 
 
 class Employee
 {
    emp_Id;
    emp_Name;

        set_Details(e_Id, e_Name)
        {
            this.emp_Id = e_Id;
            this.emp_Name = e_Name;
        }

        get_Details()
        {
            return ("Employee Id: "+ this.emp_Id  +  "  Employee Name: "+ this.emp_Name);
            this.get_Details();
        }
 }
    // object creation
        let e1 = new Employee();                // object creation.
      let x = e1.set_Details(1,"Eva");      // accessing the methods using objects
       let c = e1.get_Details();
       console.log(c);
       console.log(e1.emp_Id);              // accessing the properties using the object.
       console.log(e1.emp_Name);