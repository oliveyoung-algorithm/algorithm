/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];
  const set = new Set();
  nums.sort((a, b) => a - b);

  const findT = (t, idx) => {
    const map = new Map();
    for (let i = idx + 1; i < nums.length; i++) {
      const diff = t - nums[i];
      if (map.has(diff)) {
        const val = [nums[idx], nums[i], nums[map.get(diff)]].sort(
          (a, b) => a - b
        );
        ans.push(val);
        while (nums[i] === nums[i + 1]) i++;
      }

      map.set(nums[i], i);
    }
  };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    findT(nums[i] * -1, i);
  }
  return ans;
};
