// This solution does not work for large inputs due to stack overflow
var rob = function(nums) {
    const dp = Array(nums + 1).fill(null);
    function robHouse(n) {
        if(n <= 0) {
            dp[n] = 0;
            return 0;
        }
        if(n === 1) {
            dp[n] = nums[0]; 
            return nums[0];
        }
        if(dp[n]) {
            return dp[n];
        }
        dp[n] = Math.max(robHouse(n - 2) + nums[n - 1], robHouse(n - 3) + nums[n - 2]);
        return dp[n];
    }

    return robHouse(nums.length);
};


// This solution works for all inputs
var rob = function(nums) {
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