 
 console.log("*******");
    let a = {id:1,name:"Ana",age:25,sal:465};
    let b = {id:2,name:"Eva",age:24};
    let c = {...a,...b};
      // let d = [...a,...b];
    console.log(c);

    console.log("***********");
    let t = [1,2,3,4];
    let n = {...t};
    console.log(n);