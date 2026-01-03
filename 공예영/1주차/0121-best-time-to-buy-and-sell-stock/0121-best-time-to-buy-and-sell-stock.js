/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
       let min = Infinity,max=0, profit =0;

        for(let i =0;i<prices.length;i++){
            // 새로운 min 찾으면 탐색 시작
            if(min > prices[i]){
                min = prices[i];
                max = 0;
                continue;
            }

            // max 업데이트
            if(max < prices[i]){
                max = prices[i];
                profit = Math.max(profit, max - min);
            }
        }
        return profit;

};