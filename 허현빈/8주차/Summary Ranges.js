/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let min = 0;
  let max = 0;
  let ans = [];

  if (nums.length === 1) {
    return [nums[0].toString()];
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      if (min === max) {
        ans.push(nums[min].toString());
      } else {
        ans.push(nums[min].toString() + "->" + nums[max].toString());
      }
      min = i;
      max = i;
    } else {
      max = i;
    }

    if (i === nums.length - 1) {
      if (min === max) {
        ans.push(nums[min].toString());
      } else {
        ans.push(nums[min].toString() + "->" + nums[max].toString());
      }
    }
  }

  return ans;
};
