var threeSum = function(nums) {
    const result = [];
    nums = nums.sort((a, b) => a - b);
    const len = nums.length;
    for(let i = 0; i < len - 2; i++) {
        if(nums[i] > 0) {
            break;
        }
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let start = i + 1;
        let end = len - 1;

        const targetSum = - nums[i];
        while(start < end) {
            if(nums[start] + nums[end] === targetSum) {
                result.push([nums[i], nums[start], nums[end]]);
                start++;
                end--;
            }
            else if(nums[start] + nums[end] < targetSum) {
                start++;
            } else {
                end--;
            }
        }
    }

    const map = {};
    const finalResult = [];
    for(let i = 0; i < result.length; i++) {
        const key = result[i].sort((a, b) => a - b);
        if(!map[key]) {
            finalResult.push(result[i]);
            map[key] = true;
        }
    }

    return finalResult;
};