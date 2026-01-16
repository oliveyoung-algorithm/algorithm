// https://www.acmicpc.net/problem/1543

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [string, word] = input.map((item) => item.trim());
console.log(string.split(word).length - 1);
