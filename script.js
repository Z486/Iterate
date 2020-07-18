var btn = document.getElementById("submit");
var input = document.getElementById("text");
var textTyped = document.getElementById("textTyped")
var add1 = document.getElementById("pointshere")

//when btn is clicked, the function countdown begins
btn.addEventListener("click", startCountdown);

//the function countDown decrements the variable time by 1 until it =0
var number=5;
function countDown(){
	if (number===-1){
		clearInterval();
	}
	else {
		document.getElementById("number").innerHTML=number;
		number--;
	}
}
//the fuunction starts the countdown
function startCountdown(){
	var timer= setInterval(countDown,1000);
}

//displays user input on the screen immediately after text has been typed
//activates the clear function
function userInput(){
	var x = input.value;

	textTyped.innerHTML = x;
	clear()
	}

//clears input after iterate quickly has been typed
function clear(){
	if (input.value == "iterate quickly"){
		input.value = ""
		for(add1 = 0; add1 > -1; add1++){
			add1.innerHTML
		}
	}
}



// function thisTextOnly() {
// 	if (input.value == "iterate quickly"){
// 		return true;
// 	}

// 	else {
// 		alert("Please check your submission and try again");
// 		return false;
// 	}
// }