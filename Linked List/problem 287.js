var findDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[Math.abs(nums[i]) - 1] < 0) {
         return Math.abs(nums[i]);  
        }
        nums[Math.abs(nums[i]) - 1] = - nums[Math.abs(nums[i]) - 1]
    }
    return -1;
};