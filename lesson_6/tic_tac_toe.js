const readline = require('readline-sync');

const EMPTY = " "
const H = '---';
const V = ' | '
const PLAYER_MARK = 'X';
const COMPUTER_MARK = 'O';

let gameBoard = createBoard(3);
let gameOver = false;
let play = true;

while (play) {

  gameBoard = createBoard(3);
  gameOver = false;
  do {
    displayBoard();
    playerChooseSquare();
    computerTurn();
    displayBoard();
    checkWinner();

    if (getEmpty().length === 0 && !gameOver) {
      gameOver = true;
      console.log('Board Full It\'s a tie!');
    }

  } while (!gameOver)

  playAgain();

}

function playAgain() {
  let a = readline.question("Do you wan't to play again? (y/n) ");
  play = a[0] === 'y';
}

function checkWinner() {
  let winner = checkHorizontal();
  if (winner !== 'Nobody') {
    console.log(`${winner} wins!!`);
    gameOver = true;
  }

  winner = checkVertical();
  if (winner !== 'Nobody') {
    console.log(`${winner} wins!!`);
    gameOver = true;
  }

  winner = checkLateral();
  if (winner !== 'Nobody') {
    console.log(`${winner} wins!!`);
    gameOver = true;
  }
}

function checkLateral() {
  let result = 'Nobody';
  let player, computer;
  let positions = [
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ]

  positions.forEach(x => {
    player = x.every(x => getPlace(x) === PLAYER_MARK);
    computer = x.every(x => getPlace(x) === COMPUTER_MARK);
    if (player) result = 'Player';
    else if (computer) result = 'Computer'
  })

  return result;
}

function checkVertical() {
  let result = 'Nobody';

  for (let i = 0; i < 3; i++) {
    let col = i;
    let row = 0;
    let a = gameBoard[row][col];
    let b = gameBoard[row + 1][col];
    let c = gameBoard[row + 2][col];
    if (a === PLAYER_MARK && b === PLAYER_MARK && c === PLAYER_MARK) result = "Player";
    else if (a === COMPUTER_MARK && b === COMPUTER_MARK && c === COMPUTER_MARK) result = "Computer";
    // console.log(`a ${a} b ${b} c ${c}`);
  }
  return result;
}

function checkHorizontal() {
  let result = 'Nobody'
  let player, computer;
  gameBoard.forEach(x => {
    player = x.every(x => x === PLAYER_MARK);
    computer = x.every(x => x === COMPUTER_MARK);
    if (player) result = 'Player';
    else if (computer) result = 'Computer';
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

  console.log(`\nPlayer is ${PLAYER_MARK} and AI is ${COMPUTER_MARK}\n`);

  console.log(EMPTY.repeat(3) + ' 0 ' + EMPTY + ' 1 ' + EMPTY + ' 2 ')
  console.log("");
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
