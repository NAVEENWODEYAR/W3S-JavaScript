//JavaScript Set object is used to store the elements with unique values.

let set = new Set();

console.log(set);
console.log(typeof set);
    set.add("Noel");
    set.add(26);
    set.add("Sydney");
    set.add("Teacher");

    console.log(set.size);          // to check the size of the set
    console.log(set.has("Noel"));   // to check weather the elements is present in the set 
    // set.clear();                 // to clear the set
    set.delete(26);                 // to delete the particular element
    console.log(set);
    console.log(set.has(26));