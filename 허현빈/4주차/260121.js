// 오늘 너무 피곤하다.. 날먹 dfs...rrr

var numIslands = function (grid) {
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const bfs = (y, x) => {
    const q = [[y, x]];
    while (q.length) {
      const [curRow, curCol] = q.shift();
      for (let i = 0; i < dir.length; i++) {
        const ny = curRow + dir[i][0];
        const nx = curCol + dir[i][1];
        if (
          nx >= 0 &&
          nx < grid[0].length &&
          ny >= 0 &&
          ny < grid.length &&
          grid[ny][nx] === "1"
        ) {
          grid[ny][nx] = "0";
          q.push([ny, nx]);
        }
      }
    }
  };
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        bfs(i, j);
        count++;
      }
    }
  }
  return count;
};
