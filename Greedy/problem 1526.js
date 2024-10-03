var minNumberOperations = function(target) {
    let prev = 0;
    let result = 0;

    for(let val of target) {
        if(val > prev) {
            result = result + (val - prev);
        }
        prev = val;
    }

    return result;
};