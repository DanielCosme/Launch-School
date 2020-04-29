const readline = require("readline-sync");

function prompt(message) {
	console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
	return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt("Welcome to calculator!");
// Ask the user for the first number.
prompt("What is the first number?");
let number1 = readline.question();

while (isInvalidNumber(number1)) {
	prompt("That is an invalid number");
	number1 = readline.question();
}
number1 = Number(number1);

// Ask the user for the second number.
prompt("What is the second number?");
let number2 = readline.question();

while (isInvalidNumber(number2)) {
	prompt("That is an invalid number");
	number2 = readline.question();
}
number2 = Number(number2);

// Ask the user for an operation to perform.
prompt("What operation would you like to perform:");
prompt("1) Add\n2) Substract\n3) Multiply\n4) Divide");
let operation = readline.question();

while (!["1", "2", "3", "4"].includes(operation)) {
	prompt("You need to choose 1, 2, 3, or 4");
	operation = readline.question();
}
// Perform the operation on the two numbers.
let output;
switch (operation) {
	case "1":
		output = number1 + number2;
		break;
	case "2":
		output = number1 - number2;
		break;
	case "3":
		output = number1 * number2;
		break;
	case "4":
		output = number1 / number2;
		break;
}
// Print the result to the terminal.
prompt(`The result is: ${output}`);
