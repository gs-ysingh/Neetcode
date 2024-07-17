function dfs(graph, visited, i) {
	visited[i] = 1;
	graph[i].forEach((node) => {
		if(!visited[node]) {
			dfs(graph, visited, node);
        }
    })
}

function numberOfConnectedComponents(n, edges) {
	const graph = Array(n).fill([]).map(() => []);
	const visited = Array(n).fill(0);

	edges.forEach((edge) => {
        const [u, v] = edge;
        graph[u].push(v);
        graph[v].push(u);
    });

    let count = 0;
    for(let i = 0; i < n; i++) {
	    if(!visited[i]) {
            count++;
		    dfs(graph, visited, i);
        }
    }

    return count;
}

console.log(numberOfConnectedComponents(5, [[0, 1], [1, 2], [3, 4]])); // 2
console.log(numberOfConnectedComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]])); // 1