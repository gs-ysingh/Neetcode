var missingNumber = function(nums) {
    const len = nums.length;
    let res = 0;
    for(let i = 0; i <= len; i++) {
        res = i < len ? (res ^ i ^ nums[i]) : (res ^ i);
    }
    return res;
};