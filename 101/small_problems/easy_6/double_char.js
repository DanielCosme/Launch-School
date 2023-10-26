/* Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

Examples: */

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""


function repeater(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}