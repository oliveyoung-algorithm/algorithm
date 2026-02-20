/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const newBoard = Array.from({ length: board.length }, () =>
    Array.from({ length: board[0].length }).fill(0)
  );
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let zeroCount = 0;
      for (let k = 0; k < dir.length; k++) {
        const ny = i + dir[k][0];
        const nx = j + dir[k][1];
        if (ny >= 0 && ny < board.length && nx >= 0 && nx < board[0].length) {
          if (board[ny][nx] === 1) {
            zeroCount++;
          }
        }
      }
      if (board[i][j] === 1 && zeroCount <= 1) {
        newBoard[i][j] = 0;
      } else if (board[i][j] === 1 && (zeroCount === 2 || zeroCount === 3)) {
        newBoard[i][j] = 1;
      } else if (board[i][j] === 1 && zeroCount > 3) {
        newBoard[i][j] = 0;
      } else if (board[i][j] === 0 && zeroCount === 3) {
        newBoard[i][j] = 1;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = newBoard[i][j];
    }
  }
};
