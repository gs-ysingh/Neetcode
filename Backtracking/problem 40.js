var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a, b) => a - b);
    const result = [];

    function dfs(i, subset, sum) {
        if(sum === target) {
            result.push([...subset]);
            return;
        }
        if(i >= candidates.length || sum > target) {
            return;
        }
        subset.push(candidates[i]);
        dfs(i + 1, subset, sum + candidates[i]);

        subset.pop();
        while(i < candidates.length && candidates[i] === candidates[i + 1]) {
            i++;
        }
        dfs(i + 1, subset, sum);
    }

    dfs(0, [], 0);
    return result;  
};