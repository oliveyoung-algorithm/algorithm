const fs = require("fs");
const { kill } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [N, X, Y] = input[0].split(" ").map(Number);
const sandwiches = input[1].split(" ").map(Number);

// N = sandwiches count
// X = 최소
// Y = 최대

let kkini = 0;
let left = 0;

sandwiches.forEach((sandwich) => {
  if (X <= sandwich) {
    const kkinies = Math.floor(sandwich / X);
    const maxEat = kkinies * Y;
    const eaten = Math.min(sandwich, maxEat);
    const wasted = sandwich - eaten;
    left += wasted;
    kkini += kkinies;
  } else {
    left += sandwich;
  }
});
console.log(kkini);
console.log(left);
