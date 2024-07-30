var findMin = function(nums) {
    let l = 0;
    let h = nums.length - 1;
    let min = nums[0];
    let m;

    while(l <= h) {
        if(nums[l] < nums[h]) {
            min = Math.min(min, nums[l]);
            break;
        }
        m = Math.floor((l + h) / 2);
        min = Math.min(min, nums[m]);
        
        if(nums[l] <= nums[m]) {
            l = m + 1;
        } else {
            h = m - 1;
        }
    }
    return min;
};


console.log(findMin([5, 6, 7, 0, 1, 2, 4])); // 0