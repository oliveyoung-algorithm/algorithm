/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const set = new Set();
  const ans = [];
  nums.sort((a, b) => a - b);

  const findT = (t, i) => {
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      if (nums[start] + nums[end] === t) {
        const val = [nums[i], nums[start], nums[end]].sort((a, b) => a - b);
        const str = val.join("");
        if (!set.has(str)) {
          set.add(str);
          ans.push(val);
        }
        start++;
        end--;
        while (nums[start] === nums[start - 1]) start++;
        while (nums[end] === nums[end + 1]) end--;
      } else if (nums[start] + nums[end] < t) {
        start++;
      } else if (nums[start] + nums[end] > t) {
        end--;
      }
    }
  };

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    findT(nums[i] * -1, i);
  }
  return ans;
};
