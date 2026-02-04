/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const set = new Set();
  for (let i = nums.length - 1; i >= 0; i--) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
