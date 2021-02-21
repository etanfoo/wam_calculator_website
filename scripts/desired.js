// rounding function 
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}  


// button function to calculate desired WAM
var button_desired_wam = document.getElementById("desired");

button_desired_wam.onclick = function() {
    var curr_wam = parseFloat(document.getElementById("current_wam").value);
    var desired_wam = parseFloat(document.getElementById("desired_wam").value);
    var uoc_taken = parseFloat(document.getElementById("uoc_taken").value);
    var uoc_left = parseFloat(document.getElementById("uoc_left").value);
    
    var curr_total = curr_wam * uoc_taken;
    var desired_total = desired_wam * (uoc_taken + uoc_left);
    var average_remaining = (desired_total - curr_total) / uoc_left;

    if (average_remaining > 100) {
        alert("Your desired WAM is not possible to achieve with the amount of UOC you have remaining");
    } else {
        alert("You must attain an average of " + round(average_remaining, 2) + " per subject in order to achieve your desired WAM");
    }

}