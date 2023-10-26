/* Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

Examples:
*/

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

function isPalindrome(word) {
  let reversed = word.split('').reverse().join("");
  return word === reversed && word.length > 1;
}

function substrings(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result = result.concat(substringsAtStart(str.slice(i)));
  }
  return result;
}

function substringsAtStart(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str.slice(0, i + 1));
  }
  return result;
}

