/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [];
    candidates.sort((a, b) => a - b);

    function dfs(idx, sum, arr) {
        if (sum === target) {
            ans.push([...arr]);
            return;
        }

        if (sum > target || idx >= candidates.length) {
            return;
        }

        arr.push(candidates[idx]);
        dfs(idx, sum + candidates[idx], arr);
        
        arr.pop();
        dfs(idx + 1, sum, arr);
    }

    dfs(0, 0, []);
    return ans;
};