/* Question 2

Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`
*/

let munstersDescription = "The Munsters are creepy and spooky.";
let expeted = `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

let result = "";

result = munstersDescription
	.split("")
	.map((val) => {
		let ret;
		if (isbetween(val.charCodeAt(0), 97, 122)) {
			ret = val.toUpperCase();
		} else if (isbetween(val.charCodeAt(0), 65, 90)) {
			ret = val.toLowerCase();
		} else {
			ret = val;
		}
		return ret;
	})
	.join("");

console.log(result);
console.log(expeted === result);

function isbetween(number, low, top) {
	return number >= low && number <= top;
}
