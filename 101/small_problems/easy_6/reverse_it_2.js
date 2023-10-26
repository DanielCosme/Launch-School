/* Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

Examples: */

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

function reverseWords(str) {
  let result;
  let arr = []
  let strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    if (word.length >= 5) {
      word = word.split("").reverse().join("");
    }
    arr.push(word)
  }
  result = arr.join(" ");

  console.log(result);
  return result;
}


