/* Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

Examples:
*/

stringy(6); // "101010"
stringy(9); // "101010101"
stringy(4); // "1010"
stringy(7); // "1010101"

function stringy(len) {
	let result = "";
	let one = true;
	while (result.length < len) {
		if (one) {
			result += "1";
			one = false;
		} else {
			result += "0";
			one = true;
		}
	}
	console.log(result);
	return result;
}
