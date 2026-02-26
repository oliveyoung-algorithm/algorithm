const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const num1 = Number(input[0]);
const num2 = Number(input[1]);

const num = Math.floor(num1 / 100);
for (let i = 0; i < 100; i++) {
  const num3 = num * 100 + i;
  if (num3 % num2 === 0) {
    console.log((num3 % 100).toString().padStart(2, "0"));
    return;
  }
}
