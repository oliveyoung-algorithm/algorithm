/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let curMin = Infinity
    let profit = -Infinity
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] - curMin > profit) {
            profit = prices[i] - curMin
        }

        if (prices[i] < curMin) {
            curMin = prices[i]
        }
    }
    return Math.max(0, profit)
};