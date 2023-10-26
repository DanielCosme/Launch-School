/* Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

Example:
*/

console.log(numToThePowerOf(5, 2) === 25); // logs true
console.log(numToThePowerOf(5, 2)); // logs true
console.log(numToThePowerOf(5, 4) === 625); // logs true
console.log(numToThePowerOf(5, 4)); // logs true
console.log(numToThePowerOf(-8, 4) == 4096); // logs true

function numToThePowerOf(num, power) {
	let result = num;
	for (let i = 0; i < power - 1; i++) {
		result = multiply(num, result);
	}
	return result;
}

function multiply(x, y) {
	return Number(x) * Number(y);
}
