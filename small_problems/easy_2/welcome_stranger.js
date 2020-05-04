/*Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

Example:
*/

console.log(
	greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
console.log(
	greetings(["Daniel", "C", "Ardila"], {
		title: "Senior",
		occupation: "Software Engineer",
	})
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

function greetings(array, object) {
	let name = array.join(" ") + "!";
	let title = object.title + " " + object.occupation;
	return `Hello, ${name} Nice to have a ${title}.`;
}
