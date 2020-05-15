// Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map((arr) => {
  return arr.slice().sort((a, b) => {
    let ret = 0

    if (typeof a === 'number') {
      ret = b - a;
    }
    else if (a < b) ret = 1;
    else if (a > b) ret = -1;

    return ret;
  })
})

console.log(arr);
console.log(newArr);