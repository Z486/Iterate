var btn = document.getElementById("submit");
var input = document.getElementById("text");
//global context
var timer= setInterval(countDown,1000);
var number=5;
//local 
timer.addEventListener("click", countDown);

function countDown(){
	if (number===0){
		clearInterval();
	}
	else {
		number--;
		document.getElementById("number").innerHTML=number;
	}
}


function thisTextOnly() {
	if (input.value == "iterate quickly"){
		return true;
	}

	else {
		alert("Please check your submission and try again");
		return false;
	}
}




// thisTextOnly();
// //call thisTextOnly to validate onsubmit after submit is pressed
// //I need to figure ou thow to track time
// //add event listener and reand through docs
// set interval set time out
// let counter = 10;
// setInterval should have a function and a time in ms
// setInterval( function(){

// })