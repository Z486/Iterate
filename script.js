//to do: active text box immediately after typing
//fix weird time left bug


var btn = document.getElementById("submit");
var input = document.getElementById("text");
var textTyped = document.getElementById("textTyped")
var add1 = document.getElementById("pointshere")
var timeLeft = document.getElementById("timeLeft")


//when btn is clicked, the function countdown begins
btn.addEventListener("click", startCountdown);
input.addEventListener("input", userInput);

//the function countDown decrements the variable time by 1 until it = 0
//textarea is disabled until time = 0
var number=5;
input.disabled = true;
function countDown(){
	if (number===-2){
		clearInterval();
	}
	else if (number !==-1) {
		btn.disabled = true;
		document.getElementById("number").innerHTML=number;
		number--;
	}
	else if (number ==-1){
		input.disabled = false;
			startClock()
	}
	
}

//the fuunction starts the countdown
function startCountdown(){
	var timer= setInterval(countDown, 1000);
}
//the function decrements by 1 until it reaches 0
var count = 60
function countDownAgain(){
	if (count !== -1){
		document.getElementById("timeLeft").innerHTML=count;
		count--;
	}
	else if (count === -1){
		input.disabled = true;
		clearInterval()
	}
}
//starts the countDownAgain function
function startClock(){
	var timerAgain = setInterval(countDownAgain, 1000);
}


//displays user input on the screen immediately after text has been typed
//activates the clear function
function userInput(){
	var x = input.value;

	textTyped.innerHTML = x;
	points()
	clear()
	}

//clears input after iterate quickly has been typed
function clear(){
	if (input.value == "iterate quickly"){
		input.value = "";
	}
}
//adds a point each time iterate quickly is correctly typed
//else if statements allwo for a better user experience
var anotherNumber = 1
function points(){
	if (input.value == "iterate quickly"){
		add1.innerHTML = anotherNumber;
		anotherNumber++}
	else if (input.value == " iterate quickly"){
		alert("There may be (a) blank space(s) before your input. Please refresh the page and try again.")
	}
	else if (input.value == "  iterate quickly"){
		alert("There may be (a) blank space(s) before your input. Please refresh the page and try again.")
	}
	else if (input.value == "   iterate quickly"){
		alert("There may be (a) blank space(s) before your input. Please refresh the page and try again.")
	}
	else if (input.value == "    iterate quickly"){
		alert("There may be (a) blank space(s) before your input. Please refresh the page and try again.")
}
}
