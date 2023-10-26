/* Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Examples: */

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

function isRealPalindrome(str) {
  str = str.toLowerCase();
  let result;
  let filteredStr = "";
  for ( let i = 0 ; i < str.length ; i++) {
    let tmp = str[i];
    if (isAlphaNumeric(tmp)) {
      filteredStr += tmp
    }
  }
  result = filteredStr === filteredStr.split("").reverse().join("");
  // console.log(result);

  return result;
}


function isAlphaNumeric(char) {
	let charAsciiCode = char.charCodeAt(0);
	return (
		isBetween(charAsciiCode, 97, 122) ||
		isBetween(charAsciiCode, 65, 90) ||
		isBetween(charAsciiCode, 48, 57)
  );

}function isBetween(number, low, top) {
	return number >= low && number <= top;
}