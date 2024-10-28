var serialize = function(root) {
    const result = [];
    function dfs(root) {
        if(root === null) {
            result.push("N");
            return;
        }
        result.push("" + root.val); // convert to string;
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return result.join(",");
};



var deserialize = function(data) {
    const result = data.split(",");
    this.counter = 0;
    function dfs() {
        if(result[this.counter] === "N") {
            this.counter++;
            return null;
        }
        const node = new TreeNode(parseInt(result[this.counter]));
        this.counter++;
        node.left = dfs();
        node.right = dfs();
        return node;
    }
    return dfs();
};

// Input: [1,2,3,null,null,4,5]
// serialize: "1,2,N,N,3,4,N,N,5,N,N"
// deserialize: [1,2,3,null,null,4,5]