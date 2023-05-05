// JavaScript Objects.  
// JavaScript objects are defined with object literls.

    const car = {name:"Ghost",brand:"RR",model:2020,cost:'15Cr',
                  details: function specfs()
                    {
                        return this.name + " " + this.brand;
                    }
                };
    console.log(car);
    console.log(car.cost);
    console.log(car["name"]);
    // console.log(car.specfs());
    console.log(car.specfs);

