var canCompleteCircuit = function(gas, cost) {
    const totalGas = gas.reduce((acc, curr) => acc + curr, 0);
    const totalCost = cost.reduce((acc, curr) => acc + curr, 0);

    if(totalGas < totalCost) {
        return -1;
    }

    let total = 0;
    let start = 0;
    for(let i = 0; i < gas.length; i++) {
        total = total + gas[i] - cost[i];

        if(total < 0) {
            total = 0;
            start = i + 1; 
        }
    }

    return start;
};