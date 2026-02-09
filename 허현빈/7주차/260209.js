var solve = function (board) {
  if (!board.length) return;

  const rows = board.length;
  const cols = board[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const bfs = (r, c) => {
    const queue = [[r, c]];
    const path = [[r, c]];
    visited[r][c] = true;
    let isSurrounded = true;

    while (queue.length) {
      const [curY, curX] = queue.shift();

      if (curY === 0 || curY === rows - 1 || curX === 0 || curX === cols - 1) {
        isSurrounded = false;
      }

      for (let i = 0; i < dir.length; i++) {
        const ny = curY + dir[i][0];
        const nx = curX + dir[i][1];

        if (
          ny >= 0 &&
          ny < rows &&
          nx >= 0 &&
          nx < cols &&
          board[ny][nx] === "O" &&
          !visited[ny][nx]
        ) {
          visited[ny][nx] = true;
          queue.push([ny, nx]);
          path.push([ny, nx]);
        }
      }
    }

    if (isSurrounded) {
      for (const [y, x] of path) {
        board[y][x] = "X";
      }
    }
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "O" && !visited[i][j]) {
        bfs(i, j);
      }
    }
  }
};
