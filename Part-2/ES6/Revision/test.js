
let employee = [{Id:1,Name:"Roya",Location:"Rosevalley",Sal:45631},
                 {Id:2,Name:"Rya",Location:"Rosevalley",Sal:45631}]


    function tbody()
    {
        for(e of employee)
        {
            let row = "";
            rows = row + `<tr>
                            <td> ${e.Id}</td>
                            <td> ${e.Name}</td>
                            <td> ${e.Location}</td>
                            <td> ${e.Sal}</td>
                        </tr>`
        // document.getElementById('tb').innerHTML = rows;
        console.log(e)
        }
        // document.getElementById('tb').innerHTML = rows;
     
    }

