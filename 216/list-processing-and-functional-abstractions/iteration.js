function myForEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i])
    }
}

let min = Infinity
let getMin = value => (min = value <= min ? value : min);
myForEach([4,5,12,23,3], getMin)
console.log(min)
console.log(min===3)

min = Infinity;
let max = -Infinity;

[4, 5, 12, 23, 3].forEach(value => {
  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }
});

console.log(min, max);           // 3 23
