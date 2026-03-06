/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function(stones) {
    const n = stones.length;

    const ps = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) ps[i + 1] = ps[i] + stones[i];

    const rangeSum = (l, r) => ps[r + 1] - ps[l];

    const dy = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 2; i <= n; i++) {
        for (let l = 0; l + i - 1 < n; l++) {
            const r = l + i - 1;
            const left = rangeSum(l + 1, r) - dy[l + 1][r];
            const right = rangeSum(l, r - 1) - dy[l][r - 1];

            dy[l][r] = Math.max(left, right);
        }
    }

    return dy[0][n - 1];
};