var lengthOfLIS = function(nums) {
    const len = nums.length;
    const dp = Array(len).fill(1);
    for(let i = len - 1; i >= 0; i--) {
        for(let j = i + 1; j < len; j++) {
            if(nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }
    return Math.max.apply(this, dp);
};