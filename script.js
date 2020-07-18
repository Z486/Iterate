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
	else if (number === 1 || number === 2 || number === 3 || number === 4 || number === 5){
	onkeydown = "return false;"
}
	else if{
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
