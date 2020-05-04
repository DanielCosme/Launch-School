/*Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

const readline = require("readline-sync");

let number = readline.question("Please enter an integer greater than 0: ");
while (true) {
	if (number <= 0) {
		number = readline.question("Please enter an integer greater than 0: ");
		continue;
	} else if (Number.isNaN(Number(number))) {
		number = readline.question("Please enter a number: ");
		continue;
	}
	break;
}

let sumOrProduct = readline.question(
	"Enter 's' to compute the sum, or 'p' to compute the product."
);

while (true) {
	if (!(sumOrProduct[0] === "s" || sumOrProduct === "p")) {
		console.log("Invalid Input");
		sumOrProduct = readline.question(
			"Enter 's' to compute the sum, or 'p' to compute the product."
		);
	}
	break;
}

let range = getRange(number);
let result = sum(range);

if (sumOrProduct[0] === "p") {
	result = product(range);
}

console.log(`The result is: ${result}`);

// functions

function sum(numbers) {
	return numbers.reduce((acc, cur) => acc + cur);
}

function product(numbers) {
	return numbers.reduce((acc, cur) => acc * cur);
}

function getRange(final) {
	let result = [];
	for (let i = 1; i <= final; i++) {
		result.push(i);
	}
	return result;
}
