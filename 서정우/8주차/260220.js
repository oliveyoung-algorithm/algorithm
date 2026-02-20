const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const number = input[0];
const numbers = number
  .slice(0, -1)
  .split("")
  .map((el) => (Number.isNaN(Number(el)) ? el : Number(el)));
const checkNumber = Number(number.at(-1));
const starIndex = numbers.findIndex((el) => el === "*");

const sum = numbers.reduce(
  (acc, cur, idx) =>
    Number.isInteger(cur) ? acc + cur * (idx % 2 === 0 ? 1 : 3) : acc,
  0,
);

for (let i = 0; i < 10; i++) {
  if ((sum + i * (starIndex % 2 === 0 ? 1 : 3) + checkNumber) % 10 === 0) {
    console.log(i);
    break;
  }
}
