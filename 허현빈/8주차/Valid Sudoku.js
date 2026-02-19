var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        if (set.has(board[i][j])) {
          return false;
        } else {
          set.add(board[i][j]);
        }
      }
    }

    const set2 = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== ".") {
        if (set2.has(board[j][i])) {
          return false;
        } else {
          set2.add(board[j][i]);
        }
      }
    }
  }

  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      const set = new Set();
      for (let k = 1; k <= 3; k++) {
        const val1 = board[i * 3 - k][j * 3 - 3];
        const val2 = board[i * 3 - k][j * 3 - 2];
        const val3 = board[i * 3 - k][j * 3 - 1];
        if (val1 !== "." && !set.has(val1)) {
          set.add(val1);
        } else if (set.has(val1)) {
          return false;
        }
        if (val2 !== "." && !set.has(val2)) {
          set.add(val2);
        } else if (set.has(val2)) {
          return false;
        }

        if (val3 !== "." && !set.has(val3)) {
          set.add(val3);
        } else if (set.has(val3)) {
          return false;
        }
      }
    }
  }
  return true;
};
