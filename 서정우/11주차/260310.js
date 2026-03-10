const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [N, M, S] = input[0].split(" ").map(Number);

const unmannedPrice = Math.floor(((M + 1) * S * (100 - N)) / 100);

const dealPrice = M * S;

console.log(Math.min(unmannedPrice, dealPrice));
