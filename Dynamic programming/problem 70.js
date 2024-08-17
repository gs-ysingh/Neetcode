var climbStairs = function(n) {
    let mem = Array(n + 1).fill(null);
    function calculate(i) {
        if (i > n) {
            return 0;
        }
        if (i === n) {
            return 1;
        }
        if (mem[i]) {
            return mem[i];
        }
        let count = 0;
        count = count + calculate(i + 1) + calculate(i + 2);
        mem[i] = count;
        return mem[i];
    }
    return calculate(0);
};

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