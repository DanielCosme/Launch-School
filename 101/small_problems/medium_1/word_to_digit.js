/* Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Example:
*/

let DIGITS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
]

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."



function wordToDigit(str) {
  let result = str;

  for (let i = 0; i < DIGITS.length; i++) {
    let regex = new RegExp(DIGITS[i], 'g');
    result = str.replace(regex, i);
  }

  // console.log(result);
  return result;
}


