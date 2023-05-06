// Object destruction - improves the readability of the code,
                    //   - can read the object properties as variables. 

    let employee = {name:"Emma", age:26,sal:85236,place:"Europe",education:{degree:"PG",grade:1,subject:"Psychology"}};
        console.log(employee);
        // console.log(name);          // Error - name is undefined

        // Object Destruction
        let {name,age,sal,place,education} = employee;
            console.log(name);          // we can read as variables
            console.log(sal);
            // console.log(subject);       // Error - subject is not defined

        let {degree,grade,subject} = education;
            console.log(subject);