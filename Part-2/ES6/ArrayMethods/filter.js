// filter()- is used to extract the particular values . 

let cars = [{Name:"Mustang",Brand:"Ford",Color:"White",Cost:8000000},
            {Name:"Harrier",Brand:"Tata",Color:"Black",Cost:200000},
            {Name:"Fortuner",Brand:"Toyota",Color:"White",Cost:600000},
            {Name:"Q3",Brand:"Audi",Color:"White",Cost:8000000}]

   
            let White_Cars = cars.filter((car)=>{
                return car.Color == "White";
            })

    console.log("Cars list: ", cars);
    console.log("White Cars list: ", White_Cars);


        // using for-of
        let white_Car = [];
        for(cars of cars)
        {   
            if (cars.Color == "White")
            white_Car.push(cars);
        }

    console.log("White Cars list: ", white_Car);
      