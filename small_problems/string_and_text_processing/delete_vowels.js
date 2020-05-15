/* Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

Examples:
*/

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

function removeVowels(arr) {
  let ret = [];
  ret = arr.map(str => {
    let ret = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (!isVowel(char)) ret += char;
    }
    return ret;
  })
  return ret;
}

function isVowel(char) {
  return 'aeiouAEIOU'.includes(char);
}


