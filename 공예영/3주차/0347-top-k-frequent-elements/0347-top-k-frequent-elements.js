/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
        const countMap = new Map();
        nums.forEach((e)=>{
            countMap.set(e, (countMap.get(e) ?? 0) + 1);
        })
        const counts = [...countMap].sort((a,b)=>
            b[1] - a[1]
        )
        const ans = [];
        for(let i =0; i<k;i++){
            ans.push(counts[i][0]);
        }
        return ans;
    
};