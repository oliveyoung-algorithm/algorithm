const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [N, M] = input[0].split(" ").map(Number);

const dp = new Array(N + 1).fill(false);
dp[1] = true;
dp[3] = true;

for (let i = 2; i <= N; i++) {
  if (i - 1 >= 0 && !dp[i - 1]) {
    dp[i] = true;
  } else if (i - 3 >= 0 && !dp[i - 3]) {
    dp[i] = true;
  }
}

console.log(dp[N] ? "SK" : "CY");
