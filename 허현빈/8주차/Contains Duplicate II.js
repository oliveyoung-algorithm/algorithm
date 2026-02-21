/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (map.has(val)) {
      if (i - map.get(val) <= k) return true;
    }
    map.set(val, i);
  }
  return false;
};
