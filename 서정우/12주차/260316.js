const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [N, M] = input[0].split(" ").map(Number);
const displayRGB = input.slice(1, N + 1).map((el) => el.split(" ").map(Number));
const threshold = Number(input[N + 1]);

const display = Array.from({ length: N }, () => new Array(M).fill(0));

for (let i = 0; i < displayRGB.length; i++) {
  const row = displayRGB[i];
  for (let j = 0; j < row.length / 3; j++) {
    display[i][j] =
      row.slice(j * 3, j * 3 + 3).reduce((acc, cur) => acc + cur, 0) / 3 >= threshold ? 255 : 0;
  }
}

const bfs = (startX, startY) => {
  const queue = [[startX, startY]];
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    const [x, y] = queue.shift();
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < N && newY >= 0 && newY < M && display[newX][newY] === 255) {
        display[newX][newY] = 0;
        queue.push([newX, newY]);
      }
    }
  }
};

let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (display[i][j] === 255) {
      count++;
      display[i][j] = 0;
      bfs(i, j);
    }
  }
}

console.log(count);
