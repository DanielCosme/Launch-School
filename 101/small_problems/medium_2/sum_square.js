/* Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

Examples:
*/

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

function sumSquareDifference(number) {
  let result = 0;
  let count = 0
  let countPow = 0;

  for (let i = 1; i <= number; i++) {
    count += i;
    countPow += Math.pow(i, 2);
  }
  count = Math.pow(count, 2);
  result = count - countPow;

  console.log(result);
  return result;
}
