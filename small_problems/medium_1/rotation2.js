/* Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

Examples:
*/

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

function rotateRightmostDigits(number, index) {
  let str = String(number);
  let rightMost = str.length - index;
  let first = str.slice(0, rightMost);
  let mid = str.slice(rightMost + 1);
  let result = Number(first.concat(mid, str[rightMost]));

  // console.log(result);
  return result;
}

