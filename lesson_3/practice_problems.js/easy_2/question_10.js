/* Question 10

Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?
*/

let title = "Flintstone Family Members";

let alignedTitle = (str) => {
	let m = Math.floor(40 / 2 - str.length / 2);
	return " ".repeat(m) + str;
};

let withBuiltInFunction = (str) => {
	let padding = Math.floor((40 - str.length) / 2);
	return str.padStart(padding + str.length);
};

console.log(alignedTitle(title));
console.log(withBuiltInFunction(title));
