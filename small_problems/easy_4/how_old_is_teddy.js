/* Build a program that randomly generates Teddy's age, and logs it to the
 console. Have the age be a random number between 20 and 120 (inclusive). 

Example Output: 

Teddy is 69 years old!  */

teddyAge();

function teddyAge() {
  return age ((Math.random() * (121 - 20)) + 20).toFixed();
 }