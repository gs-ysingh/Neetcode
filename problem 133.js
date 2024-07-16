var dfs = function(node, map) {
    if(map[node.val]) {
        return map[node.val]
    }
    map[node.val] = new _Node(node.val);
    node.neighbors.forEach((item) => {
        map[node.val].neighbors.push(dfs(item, map));
    });
    return map[node.val];
}

var cloneGraph = function(node) {
    if(node === null) {
        return null;
    }
    const map = {};
    return dfs(node, map);
};