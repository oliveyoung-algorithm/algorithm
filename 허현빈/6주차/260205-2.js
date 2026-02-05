/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) return 0;

    let n = prices.length;
    let dp = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        let currentChange = prices[i] - prices[i-1];
        dp[i] = Math.max(0, dp[i-1] + currentChange);
       ;
    }

    return Math.max(...dp);
};