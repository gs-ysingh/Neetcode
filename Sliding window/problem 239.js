var maxSlidingWindow = function(nums, k) {
    const deque = [];
    const result = [];

    for(let i = 0; i < nums.length; i++) {
        if(deque[0] <= i - k) {
            deque.shift();
        }

        while(deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop();
        }

        deque.push(i);

        if(i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};