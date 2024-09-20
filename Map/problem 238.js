var productExceptSelf = function(nums) {
    const len = nums.length;

    const prefix = Array(len).fill(0);
    const postfix = Array(len).fill(0);
    const result = Array(len).fill(0);

    for(let i = 0; i < len; i++) {
        if(i === 0) {
            prefix[i] = nums[i];    
        } else {
            prefix[i] = prefix[i - 1] * nums[i];
        }
    }

    for(let i = len - 1; i >= 0; i--) {
        if(i === len - 1) {
            postfix[i] = nums[i];
        } else {
            postfix[i] = postfix[i + 1] * nums[i]
        }
    }

    for(let i = 0; i < len; i++) {
        const left = i > 0 ? prefix[i - 1] : 1;
        const right = i < len - 1 ? postfix[i + 1] : 1;
        result[i] = left * right;
    }

    return result;
};