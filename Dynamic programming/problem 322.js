var coinChange = function(coins, amount) {
    let memo = new Map();
    function changeCoin(coins, amount, i) {
        if (i >= coins.length || amount < 0) {
            return Infinity;
        }
        if (amount === 0) {
            return 0;
        }
        const key = `${amount},${i}`;
        if (memo.has(key)) {
            return memo.get(key);
        }
        const min = Math.min(
            changeCoin(coins, amount - coins[i], i) + 1,
            changeCoin(coins, amount, i + 1)
        );
        memo.set(key, min);
        return min;
    }
    const res = changeCoin(coins, amount, 0);
    return res === Infinity ? -1 : res;
};