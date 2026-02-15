const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const N = Number(input[0]);
const lostHealthPerPeople = input[1].split(" ").map(Number);
const earnPleasurePerPeople = input[2].split(" ").map(Number);

const dp = Array(100).fill(0);

for (let i = 0; i < N; i++) {
  const L = lostHealthPerPeople[i];
  const J = earnPleasurePerPeople[i];

  for (let h = 99; h >= L; h--) {
    dp[h] = Math.max(dp[h], dp[h - L] + J);
  }
}

console.log(Math.max(...dp));
