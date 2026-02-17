const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [N, M, K] = input[0].split(" ").map(Number);

// N = 맥주 축제 진행일수, M = 채워야하는 선호도 점수, K = 맥주 종류
// 맥주 = [선호도, 도수]
const beers = input.slice(1).map((line) => line.split(" ").map(Number));
beers.sort((a, b) => b[0] - a[0]);
const maxLevel = beers.reduce((max, beer) => Math.max(max, beer[1]), 0);
let left = 0;
let right = maxLevel;
let mid = Math.floor((left + right) / 2);
let minLevel = Infinity;

// 레벨 안으로 먹을 수 있는 맥주 N개 중 합이 제일 높은 것을 구하는 것
const getAllPreference = (level) => {
  let allPreference = 0;
  let count = 0;

  for (let i = 0; i < K; i++) {
    if (beers[i][1] <= level) {
      allPreference += beers[i][0];
      count++;
      if (count >= N) {
        break;
      }
    }
  }

  if (count < N) {
    return 0;
  }

  return allPreference;
};

while (left <= right) {
  const allPreference = getAllPreference(mid);

  if (allPreference >= M) {
    // 선호도 충족하면 더 작은 값을 찾아야함
    minLevel = Math.min(minLevel, mid);
    right = mid - 1;
    mid = Math.floor((left + right) / 2);
  } else if (allPreference < M) {
    // 모자르면 level 즉, mid 값을 올려야함
    left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }
}

console.log(minLevel === Infinity ? -1 : minLevel);
