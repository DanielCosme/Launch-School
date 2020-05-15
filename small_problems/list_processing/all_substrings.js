/* Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

You may (and should) use the substringsAtStart function you wrote in the previous exercise:

Example:
*/

substrings('abcde');

// returns
["a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e"]

function substrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    result = result.concat(substringsAtStart(str.slice(i)));
  }

  console.log(result);
  return result;
}

function substringsAtStart(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    result.push(str.slice(0, i + 1));
  }

  return result;
}

