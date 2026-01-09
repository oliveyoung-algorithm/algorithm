const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nk, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = nk.split(" ").map(Number);
const device = input.split(" ").map(Number);

const multitap = new Set();
let cnt = 0;

device.forEach((e, idx) => {
  if (multitap.has(e) || multitap.size < N) multitap.add(e);
  else {
    const temp = new Set(multitap);
    for (let i = idx + 1; i < K; i++) {
      if (temp.size === 1) break;
      temp.delete(device[i]);
    }

    const [first] = [...temp];
    multitap.delete(first);
    multitap.add(e);
    cnt++;
  }
});

console.log(cnt);
