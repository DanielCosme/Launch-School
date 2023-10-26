/* The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second. */

let numbers = [1, 2, 3, 4, 5];
let reverse = numbers.slice().reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(reverse); // [ 5, 4, 3, 2, 1 ]

let sort = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(sort); // [ 5, 4, 3, 2, 1 ]

// Bonus 1: Can you do it using the Array.prototype.forEach() method?

let byForEach = [];
numbers.forEach((x) => {
	byForEach.unshift(x);
});
console.log(numbers);
console.log(byForEach);

// Bonus 2: Can you do it using the Array.prototype.reduces) method?

let byReduce = numbers.reduce((acc, cur) => [cur, ...acc], []);

console.log(numbers);
console.log(byReduce);
