// Map() - Create a new arry using the existing array using for-each loop.  

    let emp = [25,26,24,29,27,28,21,23];
    
    let new_Emp = emp.map((e)=> {
        return e - 1;
    })

    console.log("Original Array: ",emp);
    console.log("New Array: ",new_Emp);


    let stdent = ["Naya","Maria","Stell","Jenifer"];

    let new_Student = stdent.map((st)=>{
        return st.toUpperCase();
    })

    console.log("Original Array: ", stdent);
    console.log("New Array: ", new_Student);