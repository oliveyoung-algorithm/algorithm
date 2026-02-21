/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const val = strs[i].split("").sort().join("");
    if (map.has(val)) {
      map.set(val, [...map.get(val), i]);
    } else {
      map.set(val, [i]);
    }
  }

  const ans = [];
  for (const sameValues of map) {
    const tempAns = [];
    for (let i = 0; i < sameValues[1].length; i++) {
      tempAns.push(strs[sameValues[1][i]]);
    }
    ans.push(tempAns);
  }
  return ans;
};
