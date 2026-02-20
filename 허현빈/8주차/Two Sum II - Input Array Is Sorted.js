/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  let flag = false;
  while (start < end) {
    if (numbers[start] + numbers[end] > target) {
      end--;
    } else if (numbers[start] + numbers[end] < target) {
      start++;
    } else {
      flag = true;
      break;
    }
  }
  return [start + 1, end + 1];
};
