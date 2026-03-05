const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const str1 = input[0];
const str2 = input[1];

const set1 = str1.split("");
const set2 = str2.split("");

const dp = Array(set1.length + 1)
  .fill(null)
  .map(() => Array(set2.length + 1).fill(0));

let max = 0;

for (let i = 1; i <= set1.length; i++) {
  for (let j = 1; j <= set2.length; j++) {
    const char1 = set1[i - 1];
    const char2 = set2[j - 1];

    if (char1 === char2) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
      max = Math.max(dp[i - 1][j - 1] + 1, max);
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      max = Math.max(Math.max(dp[i - 1][j], dp[i][j - 1]), max);
    }
  }
}

console.log(max);
