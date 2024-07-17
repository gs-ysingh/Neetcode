var kthSmallest = function(root, k) {
    let result = [];
    traverse(root, k);
    function traverse(root, k) {
        if(result.length >= k) {
            return;
        }
        if(root === null) {
            return;
        }
        traverse(root.left, k);
        result.push(root.val);
        traverse(root.right, k);
    }
    return result[k - 1];
};