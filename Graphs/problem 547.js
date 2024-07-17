var dfsUtil = function(i, isConnected, visited) {
    visited[i] = 1;
    for(let j = 0; j < isConnected[i].length; j++) {
        if(isConnected[i][j] && visited[j] === 0) {
            dfsUtil(j, isConnected, visited);
        }
    }
}

var findCircleNum = function(isConnected) {
    const row = isConnected.length;
    const col = isConnected[0].length;

    const visited = Array(row).fill(0);
    let count = 0;
    for(let i = 0; i < row; i++) {
        if(visited[i] === 0) {
            dfsUtil(i, isConnected, visited);
            count++;
        }
    }
    return count;
};

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])); // 2
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])); // 3