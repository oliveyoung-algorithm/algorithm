/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (h) {
  let start = 0;
  let end = h.length - 1;
  let ans = 0;
  while (start < end) {
    ans = Math.max(ans, (end - start) * Math.min(h[end], h[start]));
    if (h[start] > h[end]) {
      end--;
    } else {
      start++;
    }
  }
  return ans;
};
