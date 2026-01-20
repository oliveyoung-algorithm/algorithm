/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let startAns = -1;
  let endAns = -1;
  let start = 0;
  let end = nums.length - 1;
  while (1) {
    if (start > end) break;
    let m = Math.floor((start + end) / 2);
    if (nums[m] === target) {
      startAns = m;
      end = m - 1;
    } else if (nums[m] > target) {
      end = m - 1;
    } else {
      start = m + 1;
    }
  }

  let start2 = 0;
  let end2 = nums.length - 1;

  while (1) {
    if (start2 > end2) break;

    let m = Math.floor((start2 + end2) / 2);
    if (nums[m] === target) {
      endAns = m;
      start2 = m + 1;
    } else if (nums[m] > target) {
      end2 = m - 1;
    } else {
      start2 = m + 1;
    }
  }
  return [startAns, endAns];
};
