/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
        // two pointers 
        let start = 0;
        let end = 0;
        let sum =  gas[start] - cost[start];
        const len = gas.length;

        while(start < len){
                if(sum < 0){
                    start = end+1;
                    end = start;
                    sum = gas[start] - cost[start];
                } else {
                    if(end-start === len-1) return start;
                    end++;
                    let endIdx = end % len;
                    sum += gas[endIdx]-cost[endIdx];
                }
                
        }
        return -1;
    
};