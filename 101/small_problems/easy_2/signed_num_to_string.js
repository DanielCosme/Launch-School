/* In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer, and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.

Examples
*/

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

function signedIntegerToString(num) {
	let sign = Math.sign(num);
	let operator = "";
	let result;
	if (sign === 1) {
		operator = "+";
		result = operator + integerToString(num);
	} else if (sign === -1) {
		operator = "-";
		result = operator + integerToString(num);
	} else {
		result = "0";
	}
	return result;
}

function integerToString(input) {
	let num = Math.abs(input);
	if (num === 0) return "0";
	let digits = [];
	while (num > 0) {
		digits.unshift(num % 10);
		num = parseInt(num / 10);
	}

	return digits.join("");
}
