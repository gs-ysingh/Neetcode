function calculateHoursForK(piles, k) {
    let count = 0;
    for(let i = 0; i < piles.length; i++) {
        count = count + Math.floor(piles[i] / k);
        if(piles[i] % k > 0) {
            count = count + 1;
        }
    }
    return count;
}

var minEatingSpeed = function(piles, h) {
    let min = 1;
    let max = Math.max(...piles);
    let mid;
    while(min < max) {
        mid = Math.floor((min + max) / 2);
        const count = calculateHoursForK(piles, mid);
        if(count > h) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }
    return min;
};
