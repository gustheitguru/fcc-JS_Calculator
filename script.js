// Variables for calculation
let trailingResult = 0;
let operationOptions = ['multiply', 'subtract', 'add', 'divide', 'decimal'];
let workingOperation = ""

//updates display with required numbers or symbols
function updateDisplay(input) {
	let display = document.getElementById('display');

		if (display.innerHTML === '0' && operationOptions.indexOf(input) === -1) {
			display.innerHTML = input;
			} else if (operationOptions.indexOf(input) >= 0) {
				console.log("dealing with operation");

				if (workingOperation === "") {
					workingOperation = input;
					trailingResult = display.innerHTML;
					display.innerHTML = 0;
				} else {
					workingOperation = input;
					trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);
					display.innerHTML = trailingResult;

				}

				
			} else if (input === "equals") {
				// console.log(trailingResult + ' tr, ' + display.innerHTML + ' dis')
				display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);	
				trailingResult = display.innerHTML;
			} else {

			display.innerHTML += input;
			}
console.log('trailingResult = ' + trailingResult + ', displayHTML = '+ display.innerHTML + ', workingOperation = ' + workingOperation );			
	}

// clears display and sets to Zero
function clearDisplay(number) {
	console.log(number)
	let display = document.getElementById('display');
	display.innerHTML = number;
	
}

function calculate (firstNum, SecondNum, operation) {
	let result;
	firstNum = parseFloat(firstNum);
	SecondNum = parseFloat(SecondNum);

	switch (operation) {
		case "add": 
			result = firstNum + SecondNum;
			break;
		case "subtract":
			result = firstNum - SecondNum;
			break;
		case "multiply":
			result = firstNum * SecondNum;
			break;
		case "divide":
			result = firstNum % SecondNum;	
			break;

		default: 
	}
	return result.toString();
}


