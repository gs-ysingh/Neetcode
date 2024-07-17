// at every level , do the dfs of left and right
// the diff should be 1
// if diff is 1 at that level, push true else false in an array
// if in array any element is false, return false else true

var getDepth = function(root, arr) {
    if(root === null) {
        return -1;
    }
    const left = getDepth(root.left, arr);
    const right = getDepth(root.right, arr);

    if(Math.abs(left - right) <= 1) {
        arr.push(true);
    } else {
        arr.push(false);
    }

    return 1 + Math.max(left, right);
}

var isBalanced = function(root) {
    const arr = [];
    getDepth(root, arr);
    return arr.includes(false) ? false : true;
};