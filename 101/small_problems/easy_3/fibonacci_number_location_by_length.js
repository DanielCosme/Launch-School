/* The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

Examples:
*/

findFibonacciIndexByLength(2); // 7
findFibonacciIndexByLength(10); // 45
findFibonacciIndexByLength(16); // 74
findFibonacciIndexByLength(17); // 74

// digitCounter(3);
// digitCounter(123);
// digitCounter(1234);
// digitCounter(12345);

// Don't try any higher values until you read the solution Discussion

function findFibonacciIndexByLength(num) {
	let numOfDigits = 0;
	let fib = 0;
	for (let i = 1; digitCounter(fib) <= num; i++) {
		fib = fibonacci(i);
		if (fib > Number.MAX_SAFE_INTEGER) {
			console.log("MAX SAFE NUMBER REACHED");
			return -1;
		}
		numOfDigits = digitCounter(fib);
		if (numOfDigits === num) {
			console.log(i);
			return i;
		}
	}
	console.log("Something went wrong");
	return -1;
}

function fibonacci(x) {
	if (x === 1 || x === 2) return 1;
	let sentinel1 = 1;
	let sentinel2 = 1;
	let currFib = 0;
	for (let i = 2; i < x; i++) {
		currFib = sentinel1 + sentinel2;
		sentinel1 = sentinel2;
		sentinel2 = currFib;
	}
	// console.log(`Fibonnacci of ${x} is ==> ${currFib}`);
	return currFib;
}

function digitCounter(n) {
	let counter = 0;
	let x = n;
	while (x !== 0) {
		x = Number.parseInt(x / 10);
		counter++;
	}
	return counter;
}
