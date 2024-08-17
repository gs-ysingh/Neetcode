function maxProduct(nums) {
    let currMax = 1;
    let currMin = 1;
    let res = Math.max.apply(this, nums);
    for(let i = 0; i < nums.length; i++) {
        const temp = nums[i] * currMax;
        currMax = Math.max(nums[i], temp, nums[i] * currMin);
        currMin = Math.min(nums[i], temp, nums[i] * currMin);
        res = Math.max(currMax, res);
    }

    return res;
}