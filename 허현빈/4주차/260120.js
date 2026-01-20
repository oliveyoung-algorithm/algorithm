/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const findBound = (isFirst) => {
    let start = 0;
    let end = nums.length - 1;
    let ans = -1;

    while (start <= end) {
      let m = Math.floor((start + end) / 2);
      if (nums[m] === target) {
        ans = m;
        if (isFirst) {
          end = m - 1;
        } else {
          start = m + 1;
        }
      } else if (nums[m] < target) {
        start = m + 1;
      } else {
        end = m - 1;
      }
    }
    return ans;
  };

  return [findBound(true), findBound(false)];
};
