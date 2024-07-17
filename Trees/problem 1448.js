var goodNodes = function(root) {
    let goodNodes = 0;
    const maxAtCurrentLevel = root.val;

    dfs(root, maxAtCurrentLevel);

    function dfs(root, maxAtCurrentLevel) {
        if(root === null) {
            return;
        }
        if(root.val >= maxAtCurrentLevel) {
            maxAtCurrentLevel = root.val;
            goodNodes++;
        }
        dfs(root.left, maxAtCurrentLevel);
        dfs(root.right, maxAtCurrentLevel);
    }
    return goodNodes;
};