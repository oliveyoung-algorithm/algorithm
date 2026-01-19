/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

     const base = strs[0];

    for (let i = 0; i < base.length; i++) {
        const ch = base[i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== ch) {
            return base.slice(0, i);
            }
        }
    }
    return base;
};