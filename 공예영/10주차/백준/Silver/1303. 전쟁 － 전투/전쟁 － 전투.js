const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [size, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [col, row] = size.split(" ").map(Number);

const map = input.map(line => line.split(""));
const visited = Array.from({ length: row }, () => Array(col).fill(false));

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
const stack = [];
let color;
let white = 0;
let black = 0;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (visited[i][j]) continue;
    
    let cnt = 1;
    color = map[i][j];
    stack.push([i, j])
    visited[i][j] = true;

    while (stack.length > 0) {
      const [x, y] = stack.pop();

      for (let t = 0; t < 4; t++) {
        let cx = x + dx[t];
        let cy = y + dy[t];

        if (cx<0 || cy<0 ||cx >= row || cy >= col || visited[cx][cy] || map[cx][cy] != color) continue;

        stack.push([cx, cy])
        visited[cx][cy] = true;
        cnt++;
      }
    }
    if (color === 'W') {
      white += cnt * cnt;
    } else black += cnt * cnt;
  }

}

console.log(white+" "+ black)
