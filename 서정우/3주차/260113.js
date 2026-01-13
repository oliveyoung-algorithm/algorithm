const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "dev/stdin.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input.slice(1).map((line) => line.split(" ").map(Number));

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

const min = A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);

console.log(min);
