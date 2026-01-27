const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const lines = input.slice(1);
const dots = new Map();

lines.forEach((line) => {
  const [position, color] = line.split(" ").map(Number);
  if (dots.has(color)) {
    dots.set(color, [...dots.get(color), position]);
  } else {
    dots.set(color, [position]);
  }
});

let sum = 0;

for (const entries of dots.entries()) {
  const positions = entries[1];
  positions.sort((a, b) => a - b);

  for (let i = 0; i < positions.length; i++) {
    const cur = positions[i];

    let leftDist = Infinity;
    let rightDist = Infinity;

    if (i > 0) {
      leftDist = cur - positions[i - 1];
    }
    if (i < positions.length - 1) {
      rightDist = positions[i + 1] - cur;
    }

    sum += Math.min(leftDist, rightDist);
  }
}

console.log(sum);
