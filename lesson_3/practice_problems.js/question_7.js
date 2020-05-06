/* Question 7

Determine whether the name Dino appears in the strings below -- check each string separately): */

let query = "Dino";
let str1 =
	"Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes(query));
console.log(str2.includes(query));
