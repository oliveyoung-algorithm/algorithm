// https://www.acmicpc.net/problem/15650

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "dev/stdin.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const result = [];

const backtracking = (arr) => {
  if (arr.length !== M) {
    for (let i = arr.at(-1) + 1; i <= N; i++) {
      arr.push(i);
      backtracking(arr);
      arr.pop();
    }
  } else {
    result.push(arr.join(" "));
  }
};

for (let i = 1; i <= N; i++) {
  const arr = [i];
  backtracking(arr);
}

console.log(result.join("\n"));
