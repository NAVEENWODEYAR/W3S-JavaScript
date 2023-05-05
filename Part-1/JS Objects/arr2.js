// JavaScript Array

const ar = ["One","Two","Three","Four"];

console.log(ar.sort());
console.log(ar.length);           

console.log(ar.reverse());

   let a =  ar.values();            // values() - creates a new array iterator object
        for(aa of a)
        {
            console.log(aa);
        }

    let st = ar.toString();         // array to string.
    console.log(st.length);          // length is a property in String  