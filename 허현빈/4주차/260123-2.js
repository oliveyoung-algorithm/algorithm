const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

input.pop();

const ans = () => {
  const ans = [];
  const arr = input;
  for (let i = 0; i < arr.length; i++) {
    arr[i].shift();
    ans.push(findAns(arr[i]));
  }

  function findAns(arr) {
    const lStack = [];
    const lAns = [];
    const rStack = [];
    const rAns = [];
    const tempAns = [];

    for (let i = 0; i < arr.length; i++) {
      const arrVal = arr[i];
      let count = 0;
      if (lStack.length) {
        const val = lStack[lStack.length - 1];
        if (val >= arrVal) {
          lStack.pop();
          count += arrVal;
        }
        lStack.push(arrVal);
      }
      lAns.push(arrVal);
    }

    console.log(lAns);
    for (let i = arr.length - 1; i >= 0; i--) {}
    for (let i = 0; i < arr.length; i++) {
      tempAns[i] + arr[i];
    }

    return Math.max(...tempAns);
  }
};
ans();
