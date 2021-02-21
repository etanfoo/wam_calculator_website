// rounding function 
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}   


// 4.0 gpa button
var gpa_4 = document.getElementById("4.0");

gpa_4.onclick = function() {
    // grade variables
    var hd = parseFloat(document.getElementById("high_distinction").value);
    var dist = parseFloat(document.getElementById("distinction").value);
    var cr = parseFloat(document.getElementById("credit").value);
    var pass = parseFloat(document.getElementById("pass").value);
    var fail = parseFloat(document.getElementById("fail").value);
    
    var total_units = hd + dist + cr + pass + fail;
    var gpa = round((4*hd + 3*dist + 2*cr + 1*pass) / total_units, 2);
    
    alert("Your 4.0 GPA is " + gpa);
};



// 7.0 gpa button
var gpa_7 = document.getElementById("7.0");

gpa_7.onclick = function() {
    // grade variables
    var hd = parseFloat(document.getElementById("high_distinction").value);
    var dist = parseFloat(document.getElementById("distinction").value);
    var cr = parseFloat(document.getElementById("credit").value);
    var pass = parseFloat(document.getElementById("pass").value);
    var fail = parseFloat(document.getElementById("fail").value);

    var total_units = hd + dist + cr + pass + fail;
    var gpa = round((7*hd + 6*dist + 5*cr + 4*pass) / total_units, 2);
    
    alert("Your 7.0 GPA is " + gpa);
};