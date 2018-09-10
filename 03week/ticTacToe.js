'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  for(i = 0; i < 3; i++)
  {
    const x = board[i][0];
    const y = board[i][1];
    const z = board[i][2];

    if(x == y == z && x !== " " && y !== " " && z !== " ")
    {
      return true;
    }
  }
}

function verticalWin() {
  for(i = 0; i < 3; i++)
  {
    const x = board[0][i];
    const y = board[1][i];
    const z = board[2][i];

    if(x == y == z && x !== " " && y !== " " && z !== " ")
    {
      return true;
    }
  }
}

function diagonalWin() {
  // Your code here
}

function checkForWin() {
  var horzResult = horizontalWin();
  var vertResult = verticalWin();
  var diagResult = diagonalWin();
  
  if(horzResult == true || vertResult == true || diagonalResult == true)
  {
    return true;
  }
  else{
    return
  }
  
}

function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  const result = checkForWin();

  if(playerTurn == "X")
  {
    playerTurn = "O";
  }
  else{
    playerTurn = "X";
  }

}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
