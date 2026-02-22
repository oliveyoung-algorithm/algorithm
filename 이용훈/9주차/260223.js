/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    for (let i = 0; i < strs[0].length; i++) {
        const ch = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== ch) {
            return strs[0].slice(0, i);
        }
    }
  }

  return strs[0];
};