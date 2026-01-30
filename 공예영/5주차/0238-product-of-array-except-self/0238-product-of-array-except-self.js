/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let product = 1;
    const ans= [];
    // 왼쪽 곱
    for(let i=0;i<nums.length;i++){
        ans[i] = product;
        product *= nums[i];
    }

    //오른쪽 곱
    product=1;
    for(let i=nums.length-1;i>=0;i--){
        ans[i] *= product;
        product *= nums[i];
    }

    return ans;
};