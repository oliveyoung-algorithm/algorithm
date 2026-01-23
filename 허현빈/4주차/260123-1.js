const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);

const ans = () => {
  const n = input.shift();
  const arr = input;
  let result = 0;
  const stack = []; // 높이만 저장

  for (let i = arr.length - 1; i >= 0; i--) {
    const height = arr[i];

    // 현재 높이보다 낮은 건물들을 모두 제거
    while (stack.length && stack[stack.length - 1] < height) {
      stack.pop();
    }

    // 스택에 남은 건물 수 = 현재 건물이 볼 수 있는 건물 수
    result += stack.length;
    stack.push(height);
  }

  console.log(result);
};
ans();
