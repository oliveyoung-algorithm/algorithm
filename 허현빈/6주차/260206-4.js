/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const dp = Array.from({ length: nums.length }).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        for (let j = i; j < Math.min(i + val + 1, nums.length); j++) {
            dp[j] = Math.min(dp[j], dp[i] + 1)
        }
    }
    return dp[nums.length - 1]
};