var minCostClimbingStairs = function(cost) {
    // Create a dp array initialized with null values
    var dp = new Array(cost.length + 1).fill(null);
    
    function minCost(n) {
        if (n <= 1) {
            return 0;
        }
        if (dp[n] !== null) {
            return dp[n];
        }
        dp[n] = Math.min(minCost(n - 1) + cost[n - 1], minCost(n - 2) + cost[n - 2]);
        return dp[n];
    }
    
    // Start the recursion from the top of the stairs
    return minCost(cost.length);
};