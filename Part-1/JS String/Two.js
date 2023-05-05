// String Methods 

let st = "JavaScript";
let st1 = "Responsive";
let st2 = "React"
    console.log(st.length);                       // returns the length of the string
    console.log(st.charAt(st.length-1));         // returns the last character of the string
    console.log(st.charAt(0))                   // returns the first character of the string

    console.log(st.concat(" ",st1));                    // concat() joins two strings and returns a new string
    console.log(st. concat(" ", st1 , " ",st2))

    console.log(st.constructor);                         // constructor returns the function that crated string prototype

    console.log(st.endsWith("t"));                         // checks weather the string endsWith a particular character/word, true or false

    console.log(st.includes("S"));                          // checks weather the string includes a particular character/word.

    console.log(st.match('i'));                             // match, searches for i using string
    console.log(st.match(/i/));                             // match, searches for i using RE

    console.log(st.repeat(5));                             // repeat() returns the string with the number of copies specified

    console.log(st.replace("S","s"));                       // method returns a new string with the value(s) replaced

    console.log(st.search('S'));                            //method returns the index (position) of the first match

    console.log(st.slice(0,4));                                 // method returns the extracted part in a new string

