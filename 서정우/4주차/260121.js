const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const map = input.slice(1).map((line) => line.split(" ").map(Number));
const dp = Array.from({ length: N }, () => Array.from({ length: N }, () => Array(3).fill(0)));
dp[0][0][0] = 0;
dp[0][1][0] = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // d: 0 = 오른쪽 1 = 대각선 2 = 아래
    if (i === 0) {
      if (j > 1 && map[i][j] === 0) {
        dp[i][j][0] = dp[i][j - 1][0];
      }
      continue;
    }

    if (j > 0 && map[i][j] === 0) {
      dp[i][j][0] = dp[i][j - 1][0] + dp[i][j - 1][1];
    }

    if (i > 0 && j > 0 && map[i - 1][j] === 0 && map[i][j] === 0 && map[i][j - 1] === 0) {
      dp[i][j][1] = dp[i - 1][j - 1][0] + dp[i - 1][j - 1][1] + dp[i - 1][j - 1][2];
    }

    if (i > 0 && map[i][j] === 0) {
      dp[i][j][2] = dp[i - 1][j][1] + dp[i - 1][j][2];
    }
  }
}

console.log(dp[N - 1][N - 1].reduce((a, b) => a + b, 0));
