/*Tip Calculator

Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/

const readline = require("readline-sync");

console.log("Welcome to tip calculator");
console.log("--------------------------------\n");

console.log("Please enter the bill amount: ");
let billAmount = Number.parseFloat(readline.prompt());

console.log("Please enter the tip rate in percentage e.g. 24% as just 24: ");
let tipRate = Number.parseFloat(readline.prompt());

let tipAmount = (tipRate / 100) * billAmount;
let totalBill = billAmount + tipAmount;

console.log(`Your tip is: ${tipAmount.toFixed()}`);
console.log(`Your total bill is: ${totalBill.toFixed()}`);
