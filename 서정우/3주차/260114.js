const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const dp = [1, 2];
for (let i = 2; i < N; i++) {
  dp[i] = ((dp[i - 1] % 15746) + (dp[i - 2] % 15746)) % 15746;
}

console.log(dp[N - 1]);
