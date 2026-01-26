/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);

  let max = 0;
  for (let num of set) {
    let count = 1;
    if (!set.has(num - 1)) {
      let idx = 1;
      while (1) {
        if (set.has(num + idx)) {
          idx++;
          count++;
        } else {
          break;
        }
      }
      max = Math.max(max, count);
    }
  }
  return max;
};
