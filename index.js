// Storing of input Field
var result=document.getElementById("result");

function display(number){
    //number Would be transferred to result.value
    result.value += number;
}

function calculate(){
    var final_number= result.value;
    //Final Calculation
    var final_number = eval(final_number);
    result.value = final_number;
}


// Function for clearing out screen on click of AC Button
function clearscreen(){
        result.value="";
}

//Functuion for DEL button
function del(){
    // Takes out latest number 
    result.value = result.value.slice(0,-1);
}