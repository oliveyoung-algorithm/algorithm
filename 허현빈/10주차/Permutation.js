/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const bkArr = []
    const ans =[]
    const visit = Array.from({length: nums.length}).fill(false)
    const bk = (nk) =>{
        if(nk === nums.length){
            ans.push([...bkArr])
            return
        }
        for(let i = 0 ; i < nums.length; i++){
            if(visit[i] === false){
                visit[i] = true;
                bkArr[nk] = nums[i]
                bk(nk+1)
                visit[i] = false
            }
        }
    }
    bk(0)
    return ans
};