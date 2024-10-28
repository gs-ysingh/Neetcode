var dfs = function(graph, visited, i, parent) {
    visited[i] = true;

    for (let j = 0; j < graph[i].length; j++) {
        const node = graph[i][j];
        if (visited[node]) {
            if (node !== parent) {
                return true;
            }
        } else if (dfs(graph, visited, node, i)) {
            return true;
        }
    }

    return false;
}

var findRedundantConnection = function(edges) {
    const n = edges.length;
    const graph = Array(n + 1).fill([]).map(() => []); 
    const visited = Array(n + 1).fill(false);

    for (const edge of edges) {
        const [x, y] = edge;
        visited.fill(false); // Reset visited array for each edge
        graph[x].push(y);
        graph[y].push(x);

        if (dfs(graph, visited, x, -1)) { // Start DFS from x to detect cycle
            return edge;
        }
    }
    return null;
};
