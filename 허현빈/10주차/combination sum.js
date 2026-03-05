/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const bkArr = []
    const ans = [];

    const bk = (nk, sum,start) =>{
        if(sum > target){
            return
        }
        if(sum === target){
            ans.push([...bkArr.slice(0, nk)])
            return 
        }
        for(let i = start; i < candidates.length; i++){
            bkArr[nk] = candidates[i]
            bk(nk+1, sum+candidates[i], i)
        }
    }
    bk(0, 0, 0)
    return ans
};