/* Write a function that takes a string, and returns an object containing the following three properties:

    the percentage of characters in the string that are lowercase letters
    the percentage of characters that are uppercase letters
    the percentage of characters that are neither

You may assume that the string will always contain at least one character.

Examples:
*/

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


function letterPercentages(str) {
  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };
  let max = str.length;
  let lower = 0;
  let upper = 0;
  let neither = 0;

  for (let i = 0; i < max; i++) {
    let char = str[i];
    if (isLower(char)) lower++;
    else if (isUpper(char)) upper++;
    else neither++;
  }

  result.lowercase = ((lower * 100) / max).toFixed(2);
  result.uppercase = ((upper * 100) / max).toFixed(2);
  result.neither = ((neither * 100) / max).toFixed(2);

  console.log(result);
  return result;
}

function isLower(x) {
  return x >= 'a' && x <= 'z';
}

function isUpper(x) {
  return x >= 'A' && x <= 'Z';
}