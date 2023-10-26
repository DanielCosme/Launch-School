const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

let run = true;
prompt("Welcome to Rock, Paper, Scissors");
while (run) {
	prompt("--------------------------------\n");
	// Player makes choice
	prompt(`Please Make Choice: ${VALID_CHOICES.join(", ")}`);
	let playerChoice = readline.question();

	while (!VALID_CHOICES.includes(playerChoice)) {
		prompt("Invalid Choice");
		playerChoice = readline.question();
	}

	// Computer makes choice
	let randomIndex = randomIntegerUpTo(VALID_CHOICES.length);
	let aiChoice = VALID_CHOICES[randomIndex];
	prompt("AI Choice: " + aiChoice + " - Player choice: " + playerChoice);

	let result = battle(playerChoice, aiChoice);

	displayResult(result);

	prompt("Would you like to play again (y/n)?");
	let answer = readline.question();
	while (!(answer[0] === "y" || answer[0] === "n")) {
		prompt("Invaalid Input");
		answer = readline.question();
	}
	if (answer[0] !== "y") run = false;
}

// Functions

function displayResult(result) {
	if (result === "Nobody") {
		prompt("It's a Tie");
	}
	prompt(`${result} Wins!!!!`);
}

function battle(player, ai) {
	let winner = "Computer";
	if (playerWins(player, ai)) {
		winner = "Player";
	} else if (tie(player, ai)) {
		winner = "Nobody";
	}
	return winner;
}

function playerWins(playerChoice, aiChoice) {
	let result = false;
	if (
		(playerChoice === "rock" && aiChoice === "scissors") ||
		(playerChoice === "paper" && aiChoice === "rock") ||
		(playerChoice === "scissors" && aiChoice === "paper")
	) {
		result = true;
	}
	return result;
}

function tie(player, ai) {
	return player === ai;
}

function prompt(message) {
	console.log(`R-P-S => ${message}`);
}

function randomIntegerUpTo(number) {
	return Math.floor(Math.random() * number);
}
