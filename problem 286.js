function bfs(grid, queue, rows, cols) {
    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    
    while(queue.length > 0) {
        const [x, y, level] = queue.shift();
        for(let i = 0; i < dirs.length; i++) {
            const [dx, dy] = dirs[i];
            const newX = x + dx;
            const newY = y + dy;
            if(newX >= 0 && newY >= 0 && newX < rows && newY < cols && grid[newX][newY] === 2147483647) {
                grid[newX][newY] = level + 1;
                queue.push([newX, newY, level + 1]);
            }
        }
    }  
}
    
function islandsAndTreasure(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];

    // Initialize the queue with all gates
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 0) {
                queue.push([i, j, 0]); // Start BFS from each gate
            }
        }
    }

    bfs(grid, queue, rows, cols);

    return grid;
}

console.log(islandsAndTreasure([
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647]
]));
