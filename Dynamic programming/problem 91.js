var numDecodings = function(s) {
    let mem = {};
    function decodeWays(str, i) {
        if(i > str.length) {
            return 0;
        }
        if(i === str.length) {
            return 1;
        }
        if(mem[i]) {
            return mem[i];
        }
        let count = 0;
        if(str.charAt(i) !== "0") {
            count = count + decodeWays(str, i + 1);
        }
        if(str.charAt(i) === "1" || (str.charAt(i) === "2" && i + 1 < str.length && ["0", "1", "2", "3", "4", "5", "6"].includes(str.charAt(i + 1)))) {
            count = count + decodeWays(str, i + 2)
        }
        mem[i] = count;
        return count;
    }
    return decodeWays(s, 0);
};

var numDecodings = function(s) {
    const dp = Array(s.length + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= s.length; i++) {
        if (s.charAt(i - 1) !== "0") {
            dp[i] += dp[i - 1];
        }
        if (i > 1 && (s.charAt(i - 2) === "1" || (s.charAt(i - 2) === "2" && ['0', '1', '2', '3', '4', '5', '6'].includes(s.charAt(i - 1))))) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[s.length];
};