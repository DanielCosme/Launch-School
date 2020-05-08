// Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

let toInsert = "Four score and ";
let way1 = toInsert + famousWords;
let way2 = toInsert.concat(famousWords);

console.log(way1);
console.log(way2);
