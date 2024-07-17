// find all the nodes have value same as subRoot trees root
// then iterate to those nodes and compare with subRoot, if they are equal

var dfs = function(root, val, arr) {
    if(root === null) {
        return;
    }
    if(root.val === val) {
        arr.push(root);
    }
    dfs(root.left, val, arr);
    dfs(root.right, val, arr);
}

var compare = function(root, subRoot) {
    if(root === null && subRoot === null) {
        return true;
    }
    if(root === null && subRoot !== null) {
        return false
    }
    if(root !== null && subRoot === null) {
        return false
    }
    return root.val === subRoot.val && compare(root.left, subRoot.left) && compare(root.right, subRoot.right);
}

var isSubtree = function(root, subRoot) {
    const arr = [];
    dfs(root, subRoot.val, arr);


    for(let i = 0; i < arr.length; i++) {
        const node = arr[i];
        if(compare(node, subRoot)) {
            return true;
        }
    }
    return false;
};