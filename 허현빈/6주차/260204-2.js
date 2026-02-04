/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let ans = nums[0];
  let maxCount = 1;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const get = map.get(nums[i]);
      map.set(nums[i], get + 1);
      if (get >= maxCount && ans !== nums[i]) {
        maxCount = get;
        ans = nums[i];
      }
    } else {
      map.set(nums[i], 1);
    }
  }
  return ans;
};
