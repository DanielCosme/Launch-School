/* Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

Examples:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23. */

const readline = require('readline-sync');

let numbers = [];

for (let i = 0; i < 5 ; i++) {
  numbers[i] = readline.question(
   `Enter the ${i + 1}${getSuffix(i + 1)} number: `
   )
}

let last = readline.question("Enter the last number: ");
let answer = `The number ${last} `;
if (numbers.includes(last)) {
  answer += `appears in ${numbers}.`;
} else {
  answer +=  `does not appear in ${numbers}`;
}

console.log(answer);



function getSuffix(year) {
	let result = "";
	let yearStr = String(year);
	let edge = {
		case1: yearStr[yearStr.length - 1],
		case2: yearStr[yearStr.length - 2],
	};

	if (edge.case2 === "1") {
		result = "th";
	} else {
		switch (edge.case1) {
			case "1":
				result = "st";
				break;
			case "2":
				result = "nd";
				break;
			case "3":
				result = "rd";
				break;
			default:
				result = "th";
				break;
		}
	}
	return result;
}