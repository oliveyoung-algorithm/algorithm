const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const input = lines.map(line => line.split(" ")).map((v) => v.map(Number));

const n = input[0][0];

const dy = Array.from({ length: n + 1 }, () => Array(3).fill(0));

dy[1] = [...input[1]];

for (let i = 2; i <= n; i++) {
  dy[i][0] = input[i][0] + Math.min(dy[i-1][1], dy[i-1][2]);
  dy[i][1] = input[i][1] + Math.min(dy[i-1][0], dy[i-1][2]);
  dy[i][2] = input[i][2] + Math.min(dy[i-1][0], dy[i-1][1]);
}

console.log(Math.min(...dy[n]));
