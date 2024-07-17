var rightSideView = function(root) {
    if(root === null) {
        return [];
    }
    const queue = [];
    const result = [];

    queue.push(root);

    while(queue.length > 0) {
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const node = queue.shift();

            if (i === len - 1) result.push(node.val);

            if(node && node.left) {
                queue.push(node.left);
            }

            if(node && node.right) {
                queue.push(node.right);
            }
        }
    }
    return result;
};