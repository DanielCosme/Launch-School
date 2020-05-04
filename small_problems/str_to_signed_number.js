/* In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits, and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If no sign is given, you should return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

Examples
*/

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

function stringToSignedInteger(input) {
	let operator = input.slice(0, 1);
	let num = 0;
	if (operator === "+") {
		num = stringToInteger(input.slice(1));
	} else if (operator === "-") {
		num = stringToInteger(input.slice(1)); // - num * 2;
		num = num - num * 2;
	} else {
		num = stringToInteger(input);
	}
	return num;
}

function stringToInteger(str) {
	let result = 0;
	let arrStr = str.split("");
	let arrNum = [];
	arrStr.forEach((value) => {
		arrNum.push(mapStringCharToNumber(value));
	});

	result = arrNum.reduce((acc, val) => 10 * acc + val);
	return result;
}

function mapStringCharToNumber(x) {
	switch (x) {
		case "1":
			return 1;
		case "2":
			return 2;
		case "3":
			return 3;
		case "4":
			return 4;
		case "5":
			return 5;
		case "6":
			return 6;
		case "7":
			return 7;
		case "8":
			return 8;
		case "9":
			return 9;
		case "0":
			return 0;
	}
}
