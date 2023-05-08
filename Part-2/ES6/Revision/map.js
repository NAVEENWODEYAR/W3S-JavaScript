// Map() in JS Array 

let books = ["Kannada","Hindi","English","Science","Social","Maths"];

    // Map() - to create the new array using books[]  
            console.log("#####Array map()######");
                let new_Books = books.map((book)=>{
                    return book.substring(0,1);
                })
            console.log("Original Array: ", books);
            console.log("New Array: ", new_Books);

     // forEach
        console.log("#####Array forEach()######");
        let new_Book = [];
            books.forEach((book)=>{
              new_Book.push(book.toUpperCase());
            })
            console.log(new_Book);

    // filter()
        console.log("###Array filter()####");
            let new_Arr = books.filter((book)=>{
                return book.length >= 7;
            })
        console.log(new_Arr);



