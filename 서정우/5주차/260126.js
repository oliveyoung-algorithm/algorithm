// https://www.acmicpc.net/problem/1283
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const lines = input.slice(1);
const keymap = new Map();
const result = [];

const wrappingWithBrackets = (str, index) => {
  return str.slice(0, index) + "[" + str.slice(index, index + 1) + "]" + str.slice(index + 1);
};

for (let i = 0; i < N; i++) {
  const word = lines[i].split(" ");
  let mapString = "";
  let isMapped = false;

  for (let j = 0; j < word.length; j++) {
    const cap = word[j][0].toUpperCase();

    if (!isMapped && !keymap.get(cap)) {
      keymap.set(cap, 1);
      isMapped = true;
      mapString +=
        j < word.length - 1
          ? wrappingWithBrackets(word[j], 0) + " "
          : wrappingWithBrackets(word[j], 0);
    } else {
      mapString += j < word.length - 1 ? word[j] + " " : word[j];
      continue;
    }
  }

  if (mapString.length === lines[i].length) {
    for (let k = 0; k < lines[i].length; k++) {
      if (lines[i][k] !== " " && !keymap.get(lines[i][k].toUpperCase())) {
        keymap.set(lines[i][k].toUpperCase(), 1);
        result.push(wrappingWithBrackets(lines[i], k));
        break;
      } else if (k === lines[i].length - 1) {
        result.push(lines[i]);
      }
    }
  } else {
    result.push(mapString);
  }
}

console.log(result.join("\n"));
