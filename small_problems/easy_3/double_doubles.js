/* A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

Examples:
*/

twice(37); // 74
twice(44); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676

function twice(n) {
	// console.log( isDouble(n) ? n : n * 2);
	return isDouble(n) ? n : n * 2;
}

function isDouble(n) {
	let num = String(n);
	let splitIndex = num.length / 2;
	let firstHalf = num.slice(0, splitIndex);
	let secondHalf = num.slice(splitIndex);

	return firstHalf === secondHalf && num.length % 2 === 0;
}
