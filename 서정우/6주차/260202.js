const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split(" ").map(Number));

const isOutOfMap = (x, y, N, M) => {
  if (x >= M || x < 0 || y >= N || y < 0) {
    return true;
  } else {
    return false;
  }
};

const q = [[0, 0, 0]];
const visited = Array.from(Array(N), () => Array(M).fill(false));
const result = [];

while (q.length > 0) {
  // console.log(q);
  const node = q.shift();
  const [x, y, count] = node;

  const boosters = map[y][x];

  for (let b = 1; b <= boosters; b++) {
    if (!isOutOfMap(x + b, y, N, M)) {
      if (!visited[y][x + b]) {
        q.push([x + b, y, count + 1]);
        visited[y][x + b] = true;
      }
      if (x + b === M - 1 && y === N - 1) result.push(count + 1);
    }
    if (!isOutOfMap(x, y + b, N, M)) {
      if (!visited[y + b][x]) {
        q.push([x, y + b, count + 1]);
        visited[y + b][x] = true;
      }
      if (x === M - 1 && y + b === N - 1) result.push(count + 1);
    }
  }
}

console.log(Math.min(...result));
