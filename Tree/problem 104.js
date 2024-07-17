var maxDepth = function(root) {
    if(root === null) {
        return null;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};