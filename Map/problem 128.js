var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const set = new Set(nums);
    let max = 0;

    for (let num of set) {
        // Only consider starting points of sequences
        if (!set.has(num - 1)) {
            let currentNum = num;
            let count = 1;

            // Count consecutive numbers
            while (set.has(currentNum + 1)) {
                currentNum++;
                count++;
            }

            // Update the max sequence length
            max = Math.max(max, count);
        }
    }

    return max;
};