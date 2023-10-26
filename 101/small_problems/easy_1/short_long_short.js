/* Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Examples:
*/

console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"

function shortLongShort(first, second) {
	let long = first;
	let short = second;
	if (second.length > first.length) {
		long = second;
		short = first;
	}
	return short + long + short;
}
