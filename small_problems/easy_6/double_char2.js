/* Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Examples: */

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

function doubleConsonants(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let value = str[i];
    if (isConsonant(value)) {
      result += value;
    }
    result += value;
  }
  console.log(result);
  return result;
}

function isConsonant(char) {
  return isLetter(char) && !isVowel(char);
}

function isLetter(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

function isVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char);
}