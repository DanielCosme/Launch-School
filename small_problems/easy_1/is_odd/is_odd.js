console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

function isOdd(integer) {
	let value = Math.abs(integer);
	let result = true;
	if (value % 2 === 0) {
		result = false;
	}
	return result;
}
