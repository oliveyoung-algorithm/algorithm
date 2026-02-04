/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const map = new Map();
  for (let i = nums.length - 1; i >= 0; i--) {
    if (map.has(nums[i])) {
      if (map.get(nums[i]) >= 2) {
        nums.splice(i, 1);
      } else {
        map.set(nums[i], map.get(nums[i]) + 1);
      }
    } else {
      map.set(nums[i], 1);
    }
  }
  return nums.length;
};
