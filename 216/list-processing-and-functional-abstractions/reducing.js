function add(previousValue, element) {
  return previousValue + element;
}

let count = [1, 2, 3, 4, 5];
a = count.reduce(add);            // 15
console.log(a)

function myReduce(array, func, initial) {
  let value = initial
  let index = 0
  if (initial === undefined) {
    value = array[0];
    index = 1;
  } 

  for (; index < array.length; index++) {
    value = func(value, array[index])
  }
  return value
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

let small = myReduce([5, 12, 15, 1, 6], smallest);           // 1
let summ = myReduce([5, 12, 15, 1, 6], sum, 10);            // 49
console.log("Small: ", small)
console.log("Sum: ", summ)

function longestWord(words) {
  return myReduce(words, longest)
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

t = longestWord(['abc', 'launch', 'targets', '']);      // "targets"
console.log(t)
