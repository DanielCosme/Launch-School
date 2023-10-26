/* Practice Problem 9

Given the following data structure, return a new array with the same structure, but with the subarrays ordered -- (alphabetically or numerically as appropriate -- in ascending order. */

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = [];
arr.forEach(x => {
  if (typeof (x[0]) === 'string') {
    newArr.push(x.slice().sort());
  } else {
    newArr.push(x.slice().sort((a, b) => a - b));
  }
})

console.log(arr);
console.log(newArr);