var maxPathSum = function(root) {
    this.max = -Infinity;
    calculatePathSum(root);
    return this.max;
};

function calculatePathSum(node) {
    if (node === null) {
        return 0;
    }
    
    // Ignore negative sums
    const leftMaxSum = Math.max(calculatePathSum(node.left), 0);  
    const rightMaxSum = Math.max(calculatePathSum(node.right), 0);

    const sum = leftMaxSum + node.val + rightMaxSum;
    this.max = Math.max(this.max, sum);
    
    // Return the maximum path sum where the current node is the endpoint
    return node.val + Math.max(leftMaxSum, rightMaxSum);
}
