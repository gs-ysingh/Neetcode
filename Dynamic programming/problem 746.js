var minCostClimbingStairs = function(cost) {
    var mem = new Array(cost.length + 1).fill(null);
    const n = cost.length;
    function minCost(i) {
        if (i >= n) {
            return 0;
        }
        if (mem[i] !== null) {
            return mem[i];
        }
        mem[i] = Math.min(minCost(i + 1) + cost[i], minCost(i + 2) + cost[i]);
        return mem[i];
    }
    return Math.min(minCost(0), minCost(1));
};

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