var singleNumber = function(nums) {
    return nums.reduce((prev, current) => {
        current = prev ^ current;
        return current;
    }, 0)
};