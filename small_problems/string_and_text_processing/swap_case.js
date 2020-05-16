/* Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

Examples:
*/

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

function swapCase(str) {
  let ret = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.toUpperCase() === char) ret += char.toLowerCase();
    else ret += char.toUpperCase();
  }

  return ret;
}


