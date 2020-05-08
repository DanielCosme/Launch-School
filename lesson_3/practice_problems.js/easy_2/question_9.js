/* Question 9

Write two one-line expressions to count the number of lower-case t characters in each of the following strings: */

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let stOneCount = statement1.split("").reduce((acc, val) => {
	return val === "t" ? ++acc : acc;
}, 0);

let stTwoCount = statement2.split("").reduce((acc, val) => {
	return val === "t" ? ++acc : acc;
}, 0);

console.log(stOneCount);
console.log(stTwoCount);
