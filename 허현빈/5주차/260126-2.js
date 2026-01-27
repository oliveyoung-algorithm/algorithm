/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    const s1Count = Array(26).fill(0);
    const s2Count = Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0); 

    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - aCode]++;
        s2Count[s2.charCodeAt(i) - aCode]++;
    }
  
    const matches = (arr1, arr2) => {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };
    for (let i = 0; i < s2.length ; i++) {
        if (matches(s1Count, s2Count)) {
            return true;
        }
        s2Count[s2.charCodeAt(i + s1.length) - aCode]++;
        s2Count[s2.charCodeAt(i) - aCode]--;
    }

    return matches(s1Count, s2Count);
};