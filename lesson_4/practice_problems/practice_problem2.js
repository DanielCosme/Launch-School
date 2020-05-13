// What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

// [undefined, undefined, undefined]
// Because the callback function does not have a return value, so it defaults to undefined.

