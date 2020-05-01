// Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

oddNumbers(50);

function oddNumbers(limit) {
	for (let i = 0; i <= limit; i++) {
		if (isOdd(i)) {
			console.log(i);
		}
	}
}

function isOdd(number) {
	return number % 2 === 1;
}
