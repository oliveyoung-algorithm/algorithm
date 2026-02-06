/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let min = Infinity
    for (let i = 0; i < prices.length; i++) {
        profit += Math.max(0, prices[i] - min)
        min = prices[i]
    }
    return profit
};