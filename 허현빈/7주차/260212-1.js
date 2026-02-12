/**
 * @param {number[]} h
 * @return {number}
 */
var trap = function (h) {
  const n = h.length;
  if (n === 0) return 0;

  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);

  leftMax[0] = h[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], h[i]);
  }

  rightMax[n - 1] = h[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], h[i]);
  }

  let totalWater = 0;
  for (let i = 0; i < n; i++) {
    totalWater += Math.min(leftMax[i], rightMax[i]) - h[i];
  }

  return totalWater;
};
