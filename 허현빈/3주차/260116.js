var longestIncreasingPath = function (matrix) {
  const grid = matrix;
  let max = 0;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const set = new Set();
  matrix.map((e) => e.map((e2) => set.add(e2)));
  const newArr = Array.from(set).sort((a, b) => a - b);
  const map = new Map(newArr.map((e, i) => [e, i + 1]));
  const backtrackin = (k, row, col) => {
    if (k > max) {
      max = k;
    }
    for (let i = 0; i < 4; i++) {
      const nx = col + dir[i][1];
      const ny = row + dir[i][0];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < grid[0].length &&
        ny < grid.length &&
        grid[ny][nx] > grid[row][col]
      ) {
        const val = map.get(grid[ny][nx]);
        if (k + newArr.length - val + 1 > max) {
          backtrackin(k + 1, ny, nx);
        }
      }
    }
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      backtrackin(1, i, j);
    }
  }
  return max;
};
