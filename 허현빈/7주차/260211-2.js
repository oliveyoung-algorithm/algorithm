/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = [1];
  const right = [1];
  for (let i = 0; i < nums.length - 1; i++) {
    left.push(left[left.length - 1] * nums[i]);
  }
  for (let i = nums.length - 1; i >= 1; i--) {
    right.push(right[right.length - 1] * nums[i]);
  }
  right.reverse();
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(left[i] * right[i]);
  }
  return ans;
};
