var wordBreak = function(s, wordDict) {
    const len = s.length;
    const dp = Array(len).fill(false);
    dp[len] = true;

    for(let i = len - 1; i >= 0; i--) {
        for(let word of wordDict) {
            if(s.substring(i, i + word.length) === word) {
                dp[i] = dp[i + word.length];
            }
            if(dp[i]) {
                break;
            }
        }
    }
    return dp[0];
};