/* Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

Examples:
*/

substringsAtStart('abc');      // ["a", "ab", "abc"]
substringsAtStart('a');        // ["a"]
substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function substringsAtStart(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    result.push(str.slice(0, i + 1));
  }

  console.log(result);
  return result;
}
