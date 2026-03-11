const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());
const N = parseInt(input[0]);
const A = input[1].split(" ").map((x) => parseInt(x) - 1);

const count = [0, 0, 0];
for (const x of A) count[x]++;

const perms = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 0, 2],
  [1, 2, 0],
  [2, 0, 1],
  [2, 1, 0],
];

let answer = Infinity;

for (const perm of perms) {
  const B = [];
  for (const x of perm) {
    for (let i = 0; i < count[x]; i++) B.push(x);
  }

  const wrong = Array.from({ length: 3 }, () => [0, 0, 0]);
  for (let i = 0; i < N; i++) {
    if (A[i] !== B[i]) wrong[A[i]][B[i]]++;
  }

  let numChanges = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 3; j++) {
      const tmp = Math.min(wrong[i][j], wrong[j][i]);
      numChanges += tmp;
      wrong[i][j] -= tmp;
      wrong[j][i] -= tmp;
    }
  }

  numChanges += 2 * wrong[0][1];
  numChanges += 2 * wrong[0][2];

  answer = Math.min(answer, numChanges);
}

console.log(answer);
