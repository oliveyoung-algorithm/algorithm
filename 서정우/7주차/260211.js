const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());
const N = Number(input[0]);

class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, idx) => idx);
  }

  find(x) {
    if (this.parent[x] === x) return this.parent[x];
    return (this.parent[x] = this.find(this.parent[x]));
  }

  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA !== rootB) {
      this.parent[rootB] = rootA;
    }
  }
}

const uf = new UnionFind(N);

for (let i = 1; i <= N - 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  uf.union(a - 1, b - 1);
}

for (let i = 0; i < N; i++) {
  uf.parent[i] = uf.find(i);
}

const parentsSet = new Set(uf.parent);

console.log(
  uf.parent.indexOf([...parentsSet][0]) + 1,
  uf.parent.indexOf([...parentsSet][1]) + 1,
);
