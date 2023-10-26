/* Practice Problem 6

How does Array.prototype.fill work? Is it destructive? How can we find out? */

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

/*
fill() will convert all elements in the
specified range into the specified value.

Yes, it is destructive.

[1, 1, 1, 1, 1]
*/