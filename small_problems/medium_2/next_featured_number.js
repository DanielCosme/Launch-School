/* A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Examples:
*/
const MAX_FEATURED_NUMBER = 9876543201;

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

function featured(number) {
  if (number >= MAX_FEATURED_NUMBER) return console.log("There is no possible number that fulfills those requirements.");
  let result = 0;
  let counter = getNextMultipleOf7(number);

  while (counter <= MAX_FEATURED_NUMBER) {

    if (isOdd(counter) && areDigitsUnique(counter)) {
      result = counter;
      break;
    }
    counter += 7;
  }

  return result;
}

function getNextMultipleOf7(number) {
  let result = number + 1;
  for (let i = 0; i < number + 7; i++) {
    if (result % 7 === 0) {
      break;
    } else result += 1;
  }
  return result;
}

function areDigitsUnique(number) {
  let str = String(number);
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj.hasOwnProperty(char)) return false;
    else obj[char] = 0;
  }
  return true;
}

function isOdd(number) {
  return number % 2 === 1;
}