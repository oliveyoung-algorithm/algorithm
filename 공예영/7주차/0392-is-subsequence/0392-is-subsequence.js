/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) return true;

    let sIdx = 0;
    
    for (let tIdx = 0; tIdx < t.length; tIdx++) {
        if (s[sIdx] === t[tIdx]) {
            sIdx++;
        }
        if (sIdx === s.length) return true;
    }
    return false;
    
};