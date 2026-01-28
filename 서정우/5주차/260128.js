const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [boothes, routersCount, MAX_TIME] = input[0].split(" ").map(Number);
const routers = input.slice(1).map((line) => line.split(" ").map(Number));

const times = new Set();
for (let i = 0; i < routers.length; i++) {
  times.add(routers[i][2]);
}

const timesArray = Array.from(times).sort((a, b) => a - b);

class UnionFind {
  constructor(n) {
    this.parent = Array(n + 1)
      .fill(0)
      .map((_, i) => i);
    this.components = n; // 처음엔 모두 독립된 집합
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
      this.components--;
      return true;
    }
    return false;
  }

  getComponents() {
    return this.components;
  }
}

routers.sort((a, b) => a[2] - b[2]);

const uf = new UnionFind(boothes);
let result = 0;
let currentTime = 1;
let routerIndex = 0;

for (const time of timesArray) {
  result += uf.getComponents() * (time - currentTime);

  while (routerIndex < routers.length && routers[routerIndex][2] === time) {
    const [u, v, s] = routers[routerIndex];
    uf.union(u, v);
    routerIndex++;
  }

  currentTime = time;
}

result += uf.getComponents() * (MAX_TIME - currentTime + 1);

console.log(result);
