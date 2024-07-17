var getHeight = function(root) {
    if(root === null) {
        return -1;
    }
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    const height = 1 + Math.max(leftHeight, rightHeight);
    const diameter = 2 + leftHeight + rightHeight;
    this.diameter = Math.max(diameter, this.diameter);
    return height;
}

var diameterOfBinaryTree = function(root) {
    this.diameter = 0;
    getHeight(root);
    return this.diameter;
};