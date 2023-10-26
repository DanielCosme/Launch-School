const readline = require("readline-sync");
const messages = require("./calculator_messages.json");

function prompt(message) {
	console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
	return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt(messages.en.welcome);

let run = true;
// Ask the user for the first number.
while (run) {
	prompt(messages.en.first);
	let number1 = readline.question();

	while (isInvalidNumber(number1)) {
		prompt(messages.en.invalid);
		number1 = readline.question();
	}
	number1 = Number(number1);

	// Ask the user for the second number.
	prompt(messages.en.second);
	let number2 = readline.question();

	while (isInvalidNumber(number2)) {
		prompt(messages.en.invalid);
		number2 = readline.question();
	}
	number2 = Number(number2);

	// Ask the user for an operation to perform.
	prompt(messages.en.operation);
	prompt(messages.en.options);
	let operation = readline.question();

	while (!["1", "2", "3", "4"].includes(operation)) {
		prompt(messages.en.choose);
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
	prompt(messages.en.result + output);

	prompt(messages.en.repeat.prompt);
	prompt(messages.en.repeat.options);
	let answer = readline.question();
	answer = answer.toLowerCase();

	while (!["y", "n", "yes", "no"].includes(answer)) {
		prompt(messages.en.repeat.invalid);
		answer = readline.question().toLowerCase();
	}

	switch (answer) {
		case "n":
		case "no":
			run = false;
			break;
	}
}
