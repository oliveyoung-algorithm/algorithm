/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
        const ans = [];
        candidates.sort((a,b)=> a-b);

        dfs(0,0,[]);

        return ans;
        
        function dfs(idx, sum, arr){
            const current = sum + candidates[idx];
            const currentArr = [...arr, candidates[idx]];

            if(current > target) return;

            if(current === target) {
                ans.push(currentArr);
                return;
            };

            dfs(idx, current,currentArr);
            if(idx +1  < candidates.length) dfs(idx+1, sum, arr);

        }
    
};