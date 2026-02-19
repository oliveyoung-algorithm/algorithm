const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const N = Number(input[0]);

const neededSpeed = input[1].split(" ").map(Number);
neededSpeed.reverse();
let minSpeed = neededSpeed[0];

for (let i = 1; i < N; i++) {
  const prevSpeed = neededSpeed[i - 1];
  const speed = neededSpeed[i];
  neededSpeed[i] = Math.ceil(prevSpeed / speed) * speed;
  minSpeed = Math.max(minSpeed, neededSpeed[i]);
}

console.log(minSpeed);
