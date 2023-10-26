/*Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).


Further Exploration

Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.
*/

const readline = require("readline-sync");
const SQUARE_METERS_TO_SQUARE_FEET = 10.7639;
const SQUARE_FEET_TO_SQUARE_METERS = 0.093;

console.log("Would you like to get the are in meters or feet m/f");
let mainChoice = "meters";
let secondaryChoice = "feet";
let choice = readline.prompt();

while (true) {
	if (!(choice[0] === "m" || choice[0] === "f")) {
		console.log(`Invalid input, please try again...`);
		choice = readline.prompt();
		continue;
	}
	break;
}

if (choice[0] === "f") {
	mainChoice = "feet";
	secondaryChoice = "meters";
}

console.log(`Enter the length of the room in ${mainChoice}`);
let length = Number.parseInt(readline.prompt());

console.log(`Enter the width of the room in ${mainChoice}`);
let width = Number.parseInt(readline.prompt());

let mainArea = length * width;
let secondaryArea = fromMetersToFeet(mainArea);

if (choice[0] === "f") {
	secondaryArea = fromFeetToMeters(mainArea);
}

console.log(
	`The area of the room is ${mainArea.toFixed(
		2
	)} square ${mainChoice} (${secondaryArea.toFixed(
		2
	)} square ${secondaryChoice}).`
);

function fromMetersToFeet(meters) {
	return meters * SQUARE_METERS_TO_SQUARE_FEET;
}

function fromFeetToMeters(fee) {
	return SQUARE_FEET_TO_SQUARE_METERS / fee;
}
