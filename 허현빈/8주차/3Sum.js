/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  const ans = [];
  const set = new Set();
  const findT = (t, idx) => {
    let start = 0;
    let end = nums.length - 1;
    if (start === idx) start++;
    if (end === idx) end--;
    while (start < end) {
      if (arr[start] + arr[end] === t) {
        const temp = [arr[idx], arr[start], arr[end]].sort((a, b) => a - b);
        if (!set.has(temp.join(""))) {
          ans.push(temp);
          set.add(temp.join(""));
        }
        start++;
      } else if (arr[start] + arr[end] < t) {
        start++;
      } else if (arr[start] + arr[end] > t) {
        end--;
      }
      if (start === idx) start++;
      if (end === idx) end--;
    }
  };

  for (let i = 0; i < nums.length; i++) {
    if (arr[i] === arr[i - 1]) continue;
    findT(arr[i] * -1, i);
  }
  return ans;
};
