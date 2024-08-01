var subsetsWithDup = function(nums) {
    const arr = nums.sort((a, b) => a - b);;
    const result = [];

    function dfs(i, subset) {
        if(i >= arr.length) {
            result.push([...subset]);
            return;
        }
        subset.push(arr[i]);
        dfs(i + 1, subset);

        subset.pop();
        while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
            i++;
        }
        dfs(i + 1, subset);
    }

    dfs(0, []);
    return result;
};