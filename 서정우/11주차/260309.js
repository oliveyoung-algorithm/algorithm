const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const houseCount = Number(input[0]);
const houses = input.slice(1).map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: houseCount }, () => new Array(3).fill(0));

for (let i = 0; i < houseCount; i++) {
  const [r, g, b] = houses[i];
  if (i === 0) {
    dp[i][0] = r;
    dp[i][1] = g;
    dp[i][2] = b;
  } else {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + r;
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + g;
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + b;
  }
}

console.log(Math.min(...dp[houseCount - 1]));
