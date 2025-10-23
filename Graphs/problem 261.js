/*

Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes),
write a function to check whether these edges make up a valid tree.

Example 1:

Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
Output: true
Example 2:

Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
Output: false
Note: you can assume that no duplicate edges will appear in edges.
Since all edges are undirected, [0,1] is the same as [1,0] and thus will not appear together in edges.
*/


function isCycle(graph, visited, node, parent) {
	visited[node] = true;
	for(let i = 0; i < graph[node].length; i++) {
        const item = graph[node][i];
		if(!visited[item]) {
            if(isCycle(graph, visited, item, node)) {
				return true;
            }
        }
        else if(item !== parent) { // Easier to understand visited[item] && item !== parent
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
console.log(validTree(5, [[0,1], [0,2], [0,3], [1,4]])); // true


