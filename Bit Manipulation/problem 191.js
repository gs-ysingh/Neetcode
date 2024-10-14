var hammingWeight = function(n) {
    let res = 0;

    while(n > 0) {
        n = n & (n - 1);
        res = res + 1;
    }
    return res;
};