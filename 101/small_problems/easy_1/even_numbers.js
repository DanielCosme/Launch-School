// Log all even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

logEvenNumbers();

function logEvenNumbers() {
	const LIMIT = 99;
	for (let i = 1; i <= LIMIT; i++) {
		if (isEven(i)) {
			console.log(i);
		}
	}
}

function isEven(num) {
	return num % 2 === 0;
}
