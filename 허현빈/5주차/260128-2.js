/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (b, w) {
  const rows = b.length;
  const cols = b[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const visit = Array.from({ length: rows }, () => Array(cols).fill(false));
  const dfs = (y, x, count) => {
    if (count === w.length) return true;

    if (
      y < 0 ||
      y >= rows ||
      x < 0 ||
      x >= cols ||
      visit[y][x] ||
      b[y][x] !== w[count]
    ) {
      return false;
    }

    visit[y][x] = true;
    for (let i = 0; i < 4; i++) {
      const ny = y + dir[i][1];
      const nx = x + dir[i][0];

      if (dfs(ny, nx, count + 1)) return true;
    }
    visit[y][x] = false;
    return false;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (b[i][j] === w[0]) {
        if (dfs(i, j, 0)) return true;
      }
    }
  }

  return false;
};

// 시간 복잡도 O(N * M * 3^L) , N = 그리그 가로, M = 그리드 세로, 3 = dfs 하나당 뻗어나갈 수 있는 가짓수, L = 문자열 최대 길이 = dfs 최대 깊이
// 공간 복잡도 O(N*M), dfs 특성상 q의 최대 크기는 문자열의 길이를 넘기지 않음
