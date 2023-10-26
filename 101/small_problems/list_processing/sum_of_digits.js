/* Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

Examples: */

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

function sum(num) {
  let numArr = String(num).split("");
  let result = numArr.reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0)

  console.log(result);
  return result;
}