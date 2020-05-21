const E = " "
const H = '---';
const V = ' | '
const X = 'X';
const O = 'O';

let board = createBoard(3);

displayBoard(board);

function createBoard(dimention) {
  let board = [];
  for (let i = 0; i < dimention; i++) {
    let tmp = []
    for (let j = 0; j < dimention; j++) {
      tmp.push(E);
    }
    board.push(tmp)
  }
  return board;
}

function displayBoard(board) {

  console.log(board);

  console.log("");
  printRow('v', board[0]);
  printRow();
  printRow('v', board[1]);
  printRow();
  printRow('v', board[2]);
  console.log("");
}

function printRow(lineOrientation, arr) {
  if (lineOrientation === 'v') {
    console.log(E.repeat(3) + arr[0] + V + arr[1] + V + arr[2]);
  } else {
    console.log(E.repeat(2) + H + E + H + E + H + E);
  }
}