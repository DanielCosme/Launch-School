/* Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

Example:
*/

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(arr) {
  let ret = [];

  arr.forEach(x => {
    let fruitQuantity = x[1];
    let fruit = x[1];
    for (let i = 0; i < fruitQuantity; i++) {
      ret.push(fruit);
    }
  })

  console.log(ret);
  return ret;
}
