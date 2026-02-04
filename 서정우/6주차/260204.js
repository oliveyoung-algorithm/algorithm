const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const bingoBoard = input.slice(0, 5).map((line) => line.split(" ").map(Number));
const calls = input.slice(5).join(" ").split(" ").map(Number);

const marked = Array.from({ length: 5 }, () => Array(5).fill(false));
const rowBingo = Array(5).fill(false);
const colBingo = Array(5).fill(false);
let diag1Bingo = false,
  diag2Bingo = false;

const markNumber = (num) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (bingoBoard[i][j] === num) {
        marked[i][j] = true;
        return [i, j];
      }
    }
  }
  return null;
};

const checkBingo = ([x, y]) => {
  let bingo = 0;
  if (!rowBingo[x] && marked[x].every((v) => v)) {
    rowBingo[x] = true;
    bingo++;
  }
  if (!colBingo[y] && marked.every((row) => row[y])) {
    colBingo[y] = true;
    bingo++;
  }
  if (x === y && !diag1Bingo && marked.every((row, idx) => row[idx])) {
    diag1Bingo = true;
    bingo++;
  }
  if (x + y === 4 && !diag2Bingo && marked.every((row, idx) => row[4 - idx])) {
    diag2Bingo = true;
    bingo++;
  }
  return bingo;
};

let bingoCount = 0;
for (let callCount = 0; callCount < calls.length; callCount++) {
  const pos = markNumber(calls[callCount]);
  if (pos) {
    bingoCount += checkBingo(pos);
    if (bingoCount >= 3) {
      console.log(callCount + 1);
      break;
    }
  }
}
