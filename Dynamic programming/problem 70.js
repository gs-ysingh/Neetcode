var climbStairs = function(n) {
    let mem = Array(n + 1).fill(null);
    function calculate(n) {
        if(n <= 2) {
            mem[n] = n;
            return n;
        }
        if(mem[n]) {
            return mem[n];
        }
        mem[n] = calculate(n - 1) + calculate(n - 2);
        return mem[n];
    }
    return calculate(n);
};