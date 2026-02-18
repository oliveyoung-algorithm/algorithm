const map = new Map();

const board = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.time();
console.table(board);
console.log(...map);
console.timeEnd();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
