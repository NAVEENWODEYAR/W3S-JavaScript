// String Methods 

    let st = "Welcome to JavaScript."

    console.log(st.substring(0,3));         // substring method extracts a part of a string.

    let t = "JAVA";
    console.log(t.toLocaleLowerCase());   
    
    let sa = "JAVA";
    console.log(sa.toLowerCase());         

    let d = "java";
    console.log(d.toLocaleUpperCase());         

    let trm = "      Morning   "            // trim() removes white spaces , trimStart() trimEnd()
    console.log(trm.trim());

    let s = st.split(" ");
    console.log(s);                          //split() method splits a string into an array of substrings
    console.log(s[2]);                          // s is JS array now
        for (ss of s)                     // iterating the array
        {
            console.log(ss);
        }

    