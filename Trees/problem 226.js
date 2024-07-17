var invertTree = function(root) {
    if(root === null) {
        return null;
    }

    let temp = invertTree(root.right);
    root.right = invertTree(root.left);
    root.left = temp;

    return root;
};