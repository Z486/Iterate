var btn = document.getElementById("submit");
var input = document.getElementById("text");
var textTyped = document.getElementById("textTyped")
//clears the input
var clear = input.value = ""

enter.addEventListener("click", enterPressed);
//when btn is clicked, the fcntion countodown begins
btn.addEventListener("click", startCountdown);
//the function countDown decrements the variable time by 1
//until it reaches 0
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
function userInput(){
	var x = input.value;

	textTyped.innerHTML = x
}

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
	if (evt.keyCode ==89) {
		clear
	}

}
//object literal list; input clear after pressing y
// const Action = {
// 	yPressed() {console.log("clear");}
// };
// const keyAction = {
// 	y: {keydown: Action.yPressed}
// };


// function thisTextOnly() {
// 	if (input.value == "iterate quickly"){
// 		return true;
// 	}

// 	else {
// 		alert("Please check your submission and try again");
// 		return false;
// 	}
// }