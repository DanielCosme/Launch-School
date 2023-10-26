/* Practice Problem 8

Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop. */

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.entries(obj).forEach((value) => {
  value[1].forEach((x) => {
    let strArr = x.split("");
    strArr.forEach(x => {
      if (['a', 'e', 'i', 'o', 'u'].includes(x)) {
        console.log(x);
      }
    })
  });
});
