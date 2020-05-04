/* Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Examples:
*/

crunch("ddaaiillyy ddoouubbllee"); // "daily double"
crunch("4444abcabccba"); // "4abcabcba"
crunch("ggggggggggggggg"); // "g"
crunch("a"); // "a"
crunch(""); // ""

function crunch(input) {
	let result = "";
	let j = -1;
	for (let i = 0; i < input.length; i++) {
		if (j === -1 || input[j] !== input[i]) {
			result += input[i];
		}
		j++;
	}
	// return console.log(result);
	return result;
}
