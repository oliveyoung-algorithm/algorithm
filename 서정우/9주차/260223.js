const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);

let maxCount = 0;
let count = 0;
const arr = Array(N + 1).fill(0);
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (arr[num]) {
    arr[num] = 0;
    count--;
  } else {
    arr[num] = 1;
    count++;
  }
  maxCount = Math.max(maxCount, count);
}
console.log(maxCount);
