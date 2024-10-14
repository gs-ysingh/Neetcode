var canJump = function(nums) {
    let steps = nums[0]; // Start with the number of steps from the first index.

    for(let i = 1; i < nums.length; i++) {
        if (steps === 0) {
            // If no steps left and we're not at the last index, return false.
            return false;
        }

        steps--; // Use one step to move to the next index.
        
        // Update the maximum steps if the current position offers a better jump.
        if (nums[i] > steps) {
            steps = nums[i];
        }
    }

    // If we reached the end, return true.
    return true;
};
