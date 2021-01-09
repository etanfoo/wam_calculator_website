// rounding function 
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}   


// button function to calculate WAM
var uoc = document.getElementsByName("uoc");
var mark = document.getElementsByName("mark");
var button_calculate_wam = document.getElementById("calculate");

button_calculate_wam.onclick = function() {
    var total_uoc = 0;
    var total_uoc_mark = 0;

    for (i = 0; i < uoc.length; i++) {
        total_uoc += parseFloat(uoc[i].value);
        total_uoc_mark += parseFloat(uoc[i].value) * parseFloat(mark[i].value);
    }
    
    var wam = round((total_uoc_mark / total_uoc), 2);
    alert("Your WAM is: " + wam);
};

// button function to add row
var button_add_row = document.getElementById("add_row");

button_add_row.onclick = function() {
    var table = document.getElementsByTagName('table')[0];

    // var new_row = table.insertRow(0);
    // var cel1 = new_row.insertCell(0);
    // var cel2 = new_row.insertCell(1);
    // var cel3 = new_row.insertCell(2);
            
    

    let template = `
                <tr>
                    <th scope="row">${uoc.length + 1}</th>
                    <td>
                        <div class="input-group mb-3">
                            <input type="number" min="0" name = "uoc" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                        </div>
                    </td>
                    <td>
                        <div class="input-group mb-3">
                            <input type="number" min="0" max = "100" name = "mark" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                        </div>
                    </td>
                </tr>
                `;

    table.insertRow(-1);
    table.innerHTML += template;

    // for (var i = 0; i < 5; i++)
    // { 
    //     ('#input_table > tbody').append('<tr><td>' + i +'</td><td>b</td><td>c</td>');
    // }
    
}