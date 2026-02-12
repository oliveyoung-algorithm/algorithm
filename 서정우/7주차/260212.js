const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

console.log(
  input[0]
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join(""),
);
