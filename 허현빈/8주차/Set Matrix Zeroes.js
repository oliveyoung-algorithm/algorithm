/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const q = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        q.push([i, j]);
      }
    }
  }
  while (q.length) {
    const [curY, curX] = q.shift();
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][curX] = 0;
    }
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[curY][i] = 0;
    }
  }
};
