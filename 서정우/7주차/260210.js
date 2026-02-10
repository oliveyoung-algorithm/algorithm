const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  const [P, Q] = input[i].split(" ").map(Number);

  if (P === 1 || P === 2) {
    console.log(`Case #${i}: ${1 % Q}`);
    continue;
  }
  let prev = 1,
    curr = 1;
  for (let j = 3; j <= P; j++) {
    [prev, curr] = [curr, (prev + curr) % Q];
  }
  console.log(`Case #${i}: ${curr}`);
}
