/* Write a function that takes a string as argument, and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

Examples: */

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

/* The tests above should log true.

Note that balanced pairs must each start with a (, not a ). */


function isBalanced(str) {
  let strArr = str.split("");
  let stack = [];

  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i];
    if (char === ')' && stack.length === 0) return false;
    else if (char === '(') stack.push('(');
    else if (char === ')') stack.pop();
  }

  return stack.length === 0;
}