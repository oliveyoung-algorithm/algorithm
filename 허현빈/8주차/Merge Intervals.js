/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const newArr = intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let start = newArr[0][0];
  let end = newArr[0][1];
  const ans = [];

  for (let i = 0; i < newArr.length; i++) {
    let tempStart = newArr[i][0];
    let tempEnd = newArr[i][1];

    if (tempStart <= end) {
      end = Math.max(end, tempEnd);
    } else {
      ans.push([start, end]);
      start = tempStart;
      end = tempEnd;
    }
  }
  ans.push([start, end]);
  return ans;
};
