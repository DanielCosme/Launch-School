const readline = require("readline-sync");

prompt("Welcome to loan calculator!");

// Ask for loan amount ---> Number
prompt("What is your loan amount?");
let loanAmount = checkForValidInput();
// Ask for annual percentage (APR) ---> In percentage % as a float
prompt("What is the annual percentage?");
let annualPercentage = Number.parseFloat(checkForValidInput());
// Ask for loan duration in years ---> Number
prompt("What is the duration in years?");
let loanDuration = checkForValidInput();

// Review values entered
prompt("Your entered values are:");
prompt(`Loan amount: ${formatMoney(loanAmount)}`);
prompt(`Annual percentage: ${formatPercentage(annualPercentage)}`);
prompt(`Loan duration: ${loanDuration} years`);

// Calculate monthly interest rate
let monthlyInterestRate = annualPercentage / 12;
prompt(`Monthly interest rate: ${formatPercentage(monthlyInterestRate)}`);
monthlyInterestRate /= 100;

// Calculate duration in months
let durationInMonths = loanDuration * 12;
prompt(`Number of payments: ${durationInMonths}\n`);

// Print the monthly payment amount in dollar and cents amount e.g. $12.54
let monthlyPayment =
	loanAmount *
	(monthlyInterestRate /
		(1 - Math.pow(1 + monthlyInterestRate, -durationInMonths)));
prompt(`Your monthly payment is: ${formatMoney(monthlyPayment.toFixed(2))}`);

// Function declaration/implementations

function prompt(message) {
  console.log(`==>  ${message}`);
}

function formatMoney(money) {
  return "$" + money;
}

function formatPercentage(percentage) {
  return "% " + percentage;
}

function isInvalidNumber(number) {
  return (
    Number.isNaN(Number(number)) ||
		number.trimStart() === "" ||
		Number(number) <= 0
  );
}

function checkForValidInput() {
  let tmp = readline.question();

  while (isInvalidNumber(tmp)) {
    prompt("Invalid input please try again");
    tmp = readline.question();
  }
  return tmp;
}
