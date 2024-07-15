function isCycle(graph, visited, node, parent) {
	visited[node] = true;
	for(let i = 0; i < graph[node].length; i++) {
        const item = graph[node][i];
		if(!visited[item]) {
            if(isCycle(graph, visited, item, node)) {
				return true;
            }
        }
        else if(item !== parent) {
	        return true;
        }
    }
    return false;
}

function validTree(n, edges) {
    const graph = Array(n).fill(0).map(() => []);
    const visited = Array(n).fill(false);

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    if (isCycle(graph, visited, 0, -1)) return false;

    for(let i = 0; i < n; i++) {
        if(!visited[i]) return false;
    }

    return true;
}


console.log(validTree(5, [[0,1], [1,2], [2,3], [1,3], [1,4]])); // false
console.log(validTree(5, [[0,1], [0,2], [0,3], [1,4]])); // false


