var subsets = function(nums) {
    const result = [];
    function dfs(index, subset) {
        debugger
        if(index >= nums.length) {
            result.push(subset);
            return;
        }
        subset.push(nums[index]);
        dfs(index + 1, subset);

        subset.pop();
        dfs(index + 1, subset);
    }
    dfs(0, []);
    return result;
};

console.log(subsets([1,2,3]))