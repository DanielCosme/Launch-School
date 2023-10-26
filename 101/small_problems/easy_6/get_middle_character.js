/* Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

Examples: */

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

function centerOf(str) {
  let result;
  let len = str.length;
  let isLenOdd = len % 2 === 0;
  let middle = len / 2;

  if (isLenOdd) {
    result = str.slice(middle - 1, middle + 1);
  } else {
    result = str[Math.floor(middle)];
  }

  return result;
}

