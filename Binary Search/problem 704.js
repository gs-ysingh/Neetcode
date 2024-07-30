var search = function(nums, target) {
    let l = 0;
    let h = nums.length - 1;
    let m;

    while(l <= h) {
        m = Math.floor((l + h) / 2);
        if(nums[m] === target) {
            return m;
        } else if(nums[m] > target) {
            h = m - 1;
        } else {
            l = m + 1
        }
    }
    return -1;
};