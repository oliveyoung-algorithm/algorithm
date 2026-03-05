/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let mismatchStartWith0 = 0;
    let mismatchStartWith1 = 0;

    for (let i = 0; i < s.length; i++) {
        const expected0 = (i % 2 === 0) ? '0' : '1';
        const expected1 = (i % 2 === 0) ? '1' : '0';

        if (s[i] !== expected0) mismatchStartWith0++;
        if (s[i] !== expected1) mismatchStartWith1++;
    }

    return Math.min(mismatchStartWith0, mismatchStartWith1);
};