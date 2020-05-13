/* Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

Examples: */

swapName('Joe Roberts');    // "Roberts, Joe"


function swapName(str) {
  let reversed = str.split(" ").reverse();
  let first = reversed[0];
  let second = reversed.slice(1).join(" ");
  let result = `${first}, ${second}`;

  // console.log(result);
  return result;
}

/* Further Exploration

What if the person has one or more middle names? Refactor the current solution so that it can accommodate this; the middle names should be listed after the first name: */

swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"
