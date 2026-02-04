/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let newK = k % nums.length;
  const spl = nums.splice(nums.length - newK, newK);
  nums.unshift(...spl);
  return nums;
};
