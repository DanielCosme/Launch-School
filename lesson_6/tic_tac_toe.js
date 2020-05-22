const readline = require('readline-sync');

const EMPTY = " "
const H = '---';
const V = ' | '
const PLAYER_MARK = 'X';
const COMPUTER_MARK = 'O';

let gameBoard = createBoard(3);
let gameOver = false;
let play = true;
let score = { player: 0, computer: 0 };

while (play) {

  gameBoard = createBoard(3);
  gameOver = false;
  do {
    displayBoard();
    playerChooseSquare();
    computerTurn();
    displayBoard();
    whoWins();
    checkScore();

    if (getEmpty().length === 0 && !gameOver) {
      gameBoard = createBoard(3);
      console.log('Board Full It\'s a tie!');
      readline.question("Press any key con continue");
    }

  } while (!gameOver)

  playAgain();

}

function checkScore() {
  let res;
  if (score.player >= 5) res = "Player";
  else if (score.computer >= 5) res = "Computer";
  if (res) {
    console.log(`${res} Wins the match!`)
    gameOver = true;
  }
}

function reset() {
  gameBoard = createBoard(3);
  score.player = 0;
  score.computer = 0;
}

function playAgain() {
  let a = readline.question("Do you wan't to play again? (y/n) ");
  reset();
  play = a[0] === 'y';
}

function whoWins() {
  let winner = checkWinner();
  if (winner !== 'Nobody') {
    gameBoard = createBoard(3);
    console.log(`${winner} Wins!!`);
    readline.question("Press any key to continue");
  }
}

function checkWinner() {
  let result = 'Nobody';
  let player, computer;
  let positions = [
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]]
  ]

  positions.forEach(x => {
    player = x.every(x => getPlace(x) === PLAYER_MARK);
    computer = x.every(x => getPlace(x) === COMPUTER_MARK);
    if (player) {
      result = 'Player';
      score.player += 1;
    } else if (computer) {
      result = 'Computer'
      score.computer += 1;
    }
  })

  return result;
}

function computerTurn() {
  let empty = getEmpty();
  let position = empty[random(empty.length)];

  updateBoard(position, COMPUTER_MARK);
}

function random(num) {
  return Math.floor(Math.random() * num);
}

function playerChooseSquare() {
  let position;

  do {
    position = getPlayerInput();
  } while (placeChosen(position));

  updateBoard(position, PLAYER_MARK);
}


function getPlayerInput() {
  const map = { a: 0, b: 1, c: 2 };
  let input;

  do {
    input = readline.question("Enter your move, col/row (a-c)(0-2): ");
    if (!hasLetter(input[0])) console.log("Invalid letter");
    if (!hasValidNumber(input[1])) console.log("Invalid number");

  } while (invalidInput(input))

  input = input.split("");
  input[0] = map[input[0]];
  input[1] = Number(input[1]);

  return input;
}

function invalidInput(input) {
  return !hasLetter(input[0]) || !hasValidNumber(input[1]);
}

function hasLetter(char) {
  return ['a', 'b', 'c'].includes(char);
}

function hasValidNumber(char) {
  return Number(char) >= 0 && Number(char) <= 2;
}

function placeChosen(pos) {
  let res = getPlace(pos) !== EMPTY;
  if (res) console.log("Place taken");
  return res;
}

function getPlace(pos) {
  return gameBoard[pos[0]][pos[1]];
}

function getEmpty() {
  let result = [];
  let pos;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      pos = [i, j];
      if (getPlace(pos) === EMPTY) {
        result.push(pos);
      }
    }
  }
  return result;
}

function updateBoard(move, sign) {
  if (getEmpty().length === 0) return;
  let row = move[0]
  let col = move[1];
  gameBoard[row][col] = sign;
}

function createBoard(dimention) {
  let board = [];
  for (let i = 0; i < dimention; i++) {
    let tmp = []
    for (let j = 0; j < dimention; j++) {
      tmp.push(EMPTY);
    }
    board.push(tmp)
  }
  return board;
}

function displayBoard() {
  console.clear("");

  console.log(`\nPlayer is ${PLAYER_MARK} and AI is ${COMPUTER_MARK}`);

  console.log(`\nPlayer: ${score.player} Computer: ${score.computer}\n`);

  console.log(EMPTY.repeat(3) + ' 0 ' + EMPTY + ' 1 ' + EMPTY + ' 2 \n')
  console.log('a' + getRow('v', gameBoard[0]));
  console.log(EMPTY + getRow());
  console.log('b' + getRow('v', gameBoard[1]));
  console.log(EMPTY + getRow());
  console.log('c' + getRow('v', gameBoard[2]));
  console.log("");
}

function getRow(lineOrientation, arr) {
  if (lineOrientation === 'v') {
    return EMPTY.repeat(3) + arr[0] + V + arr[1] + V + arr[2];
  } else {
    return EMPTY.repeat(2) + H + EMPTY + H + EMPTY + H + EMPTY;
  }
}
