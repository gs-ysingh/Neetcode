var maxProfit = function(prices) {
    let l = 0;
    let h = 1;
    let max = 0;

    while(h < prices.length) {
        if(prices[l] < prices[h]) {
            max = Math.max(max, prices[h] - prices[l]);
        } else {
            l = h;
        }
        h++;
    }

    return max;
};