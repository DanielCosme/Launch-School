// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// Logs ---> hello there
// it only changed the reference towards str 2 was pointing.

/* The output is hello there since we are dealing with strings. In JavaScript, strings are immutable and can't be changed. That also means that JavaScript passes them by value, that is, it passes a copy of the string. Thus, line 2 assigns str2 a new string that happens to be a copy of str1. Line 3, in turn, assigns str2 an entirely new string. */
