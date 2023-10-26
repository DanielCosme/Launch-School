/* Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.

Examples: */

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

function reverseSentence(str) {
  let result = str.split(" ").reverse().join(" ");
  // console.log(result);
  return result;
}


