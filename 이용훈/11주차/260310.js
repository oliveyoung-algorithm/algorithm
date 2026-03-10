const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const input = lines.map(line => Number(line));
const n = input.shift();

const dy = Array.from({ length: n + 1 }, () => 0);
dy[1] = input[0];
dy[2] = input[0] + input[1];

for(let i = 3; i < n + 1; i++) {
  dy[i] = Math.max(dy[i - 2] + input[i - 1], dy[i - 3] + input[i - 2] + input[i - 1]);
}

console.log(dy[n]);