/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const balance = gas.map((e, i) => e - cost[i]);
  let total = 0;
  let current = 0;
  let ans = 0;
  for (let i = 0; i < gas.length; i++) {
    current += balance[i];
    total += balance[i];
    if (current < 0) {
      current = 0;
      ans = i + 1;
    }
  }
  return total >= 0 ? ans : -1;
};
