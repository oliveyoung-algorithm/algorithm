const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const lines = input.slice(1);
const lastMoveMap = {};
let missed = 0;

lines.forEach((line) => {
  const [id, action] = line.split(" ").map(Number);
  const move = action === 0 ? -1 : 1;
  if (lastMoveMap[id]) {
    if (lastMoveMap[id] === move) {
      missed++;
    }
    lastMoveMap[id] = move;
  } else {
    if (move === -1) {
      missed++;
    }
    lastMoveMap[id] = move;
  }
});

for (const id in lastMoveMap) {
  if (lastMoveMap[id] === 1) {
    missed++;
  }
}

console.log(missed);
