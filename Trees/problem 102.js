var levelOrder = function(root) {
    if(root === null) {
        return [];
    }
    const queue = [];
    const result = [];

    queue.push(root);

    while(queue.length > 0) {
        const currentLevel = [];
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if(node && node.left) {
                queue.push(node.left);
            }
            if(node && node.right) {
                queue.push(node.right);
            }
        }
        result.push(currentLevel);
    }
    return result;
};