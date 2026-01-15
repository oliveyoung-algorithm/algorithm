// https://www.acmicpc.net/problem/33524

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const problems = input[1].split(" ").map(Number);
const users = input[2].split(" ").map(Number);

const sizes = [0];
for (let i = 1; ; i++) {
  const size = 3 * i * (i - 1) + 1;
  if (size > N) break;
  sizes.push(size);
}

problems.sort((a, b) => a - b);

const upperBound = (arr, target) => {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    const mid = (l + r) >> 1;
    if (arr[mid] <= target) l = mid + 1;
    else r = mid;
  }
  return l;
};

const result = users.map((userSkill) => {
  const count = upperBound(problems, userSkill);
  if (count === 0) return 0;

  let left = 0;
  let right = sizes.length - 1;
  let max = 0;

  while (left <= right) {
    const mid = (left + right) >> 1;
    if (sizes[mid] <= count) {
      max = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return max;
});

console.log(result.join(" "));
