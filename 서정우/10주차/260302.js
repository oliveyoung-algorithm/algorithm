const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const N = Number(input[0]);
  const prices = input
    .slice(1)
    .map(Number)
    .sort((a, b) => b - a);

  let minSum = 0;
  for (let i = 0; i < N / 3; i++) {
    const expensiveIndex = i * 3;
    const expensiveOne = prices[expensiveIndex];
    const expensiveTwo = prices[expensiveIndex + 1];
    const expensiveThree = prices[expensiveIndex + 2];
    if ((expensiveOne && expensiveTwo) || expensiveThree) {
      minSum += prices[expensiveIndex] + prices[expensiveIndex + 1];
    } else if (expensiveOne && !expensiveTwo && !expensiveThree) {
      minSum += prices[expensiveIndex];
    }
  }

  console.log(minSum);
});
