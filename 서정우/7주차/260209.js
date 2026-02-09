const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// N 세로 M 가로
const [N, M] = input[0].split(" ").map(Number);

const board = input.slice(1).map((row) => row.split(" ").map(Number));

const isOutOfMap = (row, col) => row < 0 || row >= N || col < 0 || col >= M;

const visited = Array.from({ length: N }, () => Array(M).fill(0));

const actions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const bfs = (row, col) => {
  const q = [[row, col]];
  if (visited[row][col]) {
    return 0;
  }

  while (q.length > 0) {
    const [row, col] = q.shift();
    visited[row][col] = 1;

    actions.forEach(([ar, ac]) => {
      const nextPos = [row + ar, col + ac];
      const [nextRow, nextCol] = nextPos;

      if (isOutOfMap(nextRow, nextCol)) {
        if (nextRow < 0) nextPos[0] = N - 1;
        else if (nextRow >= N) nextPos[0] = 0;
        if (nextCol < 0) nextPos[1] = M - 1;
        else if (nextCol >= M) nextPos[1] = 0;
      }

      if (board[nextPos[0]][nextPos[1]] === 0 && !visited[nextPos[0]][nextPos[1]]) {
        q.push(nextPos);
        visited[nextPos[0]][nextPos[1]] = 1;
      }
    });
  }

  return 1;
};

let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 0 && !visited[i][j]) {
      count += bfs(i, j);
    }
  }
}

console.log(count);
