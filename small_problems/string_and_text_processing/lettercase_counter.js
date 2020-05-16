/* Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

Examples:
*/

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount(str) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (isLetter(char)) {
      if (char.toLowerCase() === char) obj.lowercase += 1;
      else obj.uppercase += 1;
    } else obj.neither += 1;
  }

  console.log(obj);
  return obj;
}

function isLetter(char) {
  let inp = char.toLowerCase();
  return inp >= 'a' && inp <= 'z';
}


