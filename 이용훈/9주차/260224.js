/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let min1 = Number.MAX_SAFE_INTEGER;
    let min2 = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < nums.length; i++) {
        const x = nums[i];

        if (x < min1) {
            min2 = min1;
            min1 = x;
        } else if (x < min2) {
            min2 = x;
        }
    }

    return nums[0] + min1 + min2;  
};