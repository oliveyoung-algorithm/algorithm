/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let val = nums[0]
    let cur = 0;
    for (let i = 0; i < nums.length; i++) {
        val--
        val = Math.max(val, nums[i])
        cur = i
        if (val === 0) break;
    }
    return cur === nums.length - 1
};