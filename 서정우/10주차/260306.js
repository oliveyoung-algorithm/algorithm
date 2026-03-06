const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const lines = input.slice(1).map((line) => line.split("-"));

lines.forEach((line) => {
  const [a, b] = line;
  const aValue = a
    .split("")
    .reduce(
      (sum, char, idx, arr) =>
        sum + Math.pow(26, arr.length - idx - 1) * (char.charCodeAt(0) - 65),
      0,
    );
  const bValue = Number(b);
  console.log(Math.abs(aValue - bValue) <= 100 ? "nice" : "not nice");
});
