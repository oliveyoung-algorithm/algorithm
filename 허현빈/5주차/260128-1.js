/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const arr = intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  const ans = [];
  let preStart = arr[0][0];
  let preEnd = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    const start = arr[i][0];
    const end = arr[i][1];
    if (start > preEnd) {
      ans.push([preStart, preEnd]);
      preStart = start;
      preEnd = end;
    } else {
      preEnd = Math.max(end, preEnd);
    }
  }
  ans.push([preStart, preEnd]);
  return ans;
};

// 시간복잡도 O(N)
// 공간복잡도 O(2N)
