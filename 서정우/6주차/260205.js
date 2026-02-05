const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const s = input[0].trim();
const t = input[1].trim();

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

const L = lcm(s.length, t.length);

const repeatToLength = (str, length) => {
  let result = "";
  while (result.length < length) result += str;
  return result.slice(0, length);
};

const sString = repeatToLength(s, L);
const tString = repeatToLength(t, L);

console.log(sString === tString ? 1 : 0);
