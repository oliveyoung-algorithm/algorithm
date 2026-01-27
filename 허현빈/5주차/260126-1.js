/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans =[]
    const bkArr =[ ]
    const visit = Array.from({length: nums.length}).fill(false)
    const bk = (k) =>{
        if(k >= nums.length){
            const newArr = JSON.parse(JSON.stringify(bkArr))
            ans.push(newArr)
            return
        }
        for(let i = 0 ; i < nums.length; i++){
            if(!visit[i]){
                visit[i] = true;
                bkArr[k] = nums[i]
                bk(k+1)
                visit[i] = false;
            }
        }
    }
    bk(0)
    return ans
};