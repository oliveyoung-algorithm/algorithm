const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [N, M] = input[0].split(" ").map(Number);
const holes = input[1].split(" ").map(Number);

let maxDistance = 0;
let distance = 0;
let left = 0;

for (let i = 0; i < N; i++) {
  distance += holes[i];

  while (distance > M) {
    distance -= holes[left];
    left++;
  }

  maxDistance = Math.max(maxDistance, distance);
}

console.log(maxDistance);
