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
