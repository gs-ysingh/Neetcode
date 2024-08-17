var robHouse = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[nums.length - 1];
};

var rob = function(nums) {
    const n1 = nums[0] + robHouse(nums.slice(2, nums.length - 1));
    const n2 = robHouse(nums.slice(1));
    return Math.max(n1, n2);
};