// 월급날 하루전!
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, d, k, c] = input[0].split(" ").map(Number);
const sushies = input.slice(1).map(Number);

let maxKind = 0;
const window = new Map();

for (let i = 0; i < k; i++) {
  window.set(sushies[i], (window.get(sushies[i]) || 0) + 1);
}

for (let i = 0; i < N; i++) {
  let kind = window.size;
  if (!window.has(c)) {
    kind++;
  }
  maxKind = Math.max(maxKind, kind);

  const removeIdx = i;
  const addIdx = (i + k) % N;

  if (window.get(sushies[removeIdx]) === 1) {
    window.delete(sushies[removeIdx]);
  } else {
    window.set(sushies[removeIdx], window.get(sushies[removeIdx]) - 1);
  }

  window.set(sushies[addIdx], (window.get(sushies[addIdx]) || 0) + 1);
}

console.log(maxKind);
