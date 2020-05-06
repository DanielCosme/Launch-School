/* Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:
*/

century(2000); // "20th"
century(2001); // "21st"
century(1965); // "20th"
century(256); // "3rd"
century(5); // "1st"
century(10103); // "102nd"
century(1052); // "11th"
century(1127); // "12th"
century(11201); // "113th"

function century(input) {
	let centuryNumber = getCenturyNumber(input);
	return centuryNumber + getCenturyEnding(centuryNumber);
}

function getCenturyNumber(year) {
	return Math.ceil(year / 100);
}

function getCenturyEnding(year) {
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
