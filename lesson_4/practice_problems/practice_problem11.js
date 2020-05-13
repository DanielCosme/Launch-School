/* Practice Problem 11

Create an object that expresses the frequency with which each letter occurs in this string: */

let statement = "The Flintstones Rock";

/* The output will look something like the following:

{ T: 1, h: 1, e: 2, F: 1, l: 1, ... } */

let arr = statement.split('');
let obj = {};

arr.forEach(x => {
  if (obj[x]) {
    obj[x]++;
  } else obj[x] = 1;
});

console.log(obj);
