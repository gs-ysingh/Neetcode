var isValid = function(root, min, max) {
    if(root === null) {
        return true;
    }

    return root.val > min && root.val < max && isValid(root.left, min, root.val) && isValid(root.right, root.val, max);
}

var isValidBST = function(root) {
    const max = Number.MAX_SAFE_INTEGER;
    const min = Number.MIN_SAFE_INTEGER;

    return isValid(root, min, max);
};