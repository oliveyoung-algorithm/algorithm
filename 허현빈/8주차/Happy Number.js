/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let temp = n.toString();
  const map = new Map();
  while (1) {
    let arr = temp.split("").map((e) => +e);
    let tempNum = 0;
    for (let i = 0; i < arr.length; i++) {
      tempNum += arr[i] ** 2;
    }
    temp = tempNum.toString();
    if (map.has(temp)) break;

    map.set(temp);
  }

  return temp === "1" ? true : false;
};
