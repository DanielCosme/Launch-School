/* Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

Example:
*/

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);


function staggeredCase(str) {
  let ret = '';
  let needUpper = true;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (isAlphabetic(char)) {
      if (needUpper) ret += char.toUpperCase();
      else ret += char.toLowerCase();
      needUpper = !needUpper;
    } else ret += char;
  }

  return ret;
}

function isAlphabetic(char) {
  let comp = char.toLowerCase();
  return comp >= 'a' && comp <= 'z';
}
