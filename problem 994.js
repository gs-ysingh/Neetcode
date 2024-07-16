// Find all the rotten organges and put in the queue
// Find all the fresh organes count.

// Start BFS for all the rotten organes, iterate through neighbors
// If it's with in the boundary and 1, update the grid
// add than in rotten organes
// increment the count of minutes;

var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const queue = [];
    let freshOrganges = 0;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] === 2) {
                queue.push([i, j]);
            }
            if(grid[i][j] === 1) {
                freshOrganges++;
            }
        }
    }

    let min = 0;

    while(queue.length > 0 && freshOrganges > 0) {
        const size = queue.length;
        for(let i = 0; i < size; i++) {
            const [i, j] = queue.shift();
            if(i + 1 < rows && grid[i + 1][j] === 1) {
                grid[i + 1][j] = 2;
                freshOrganges--;
                queue.push([i + 1 , j]);

            }
            if(j + 1 < cols && grid[i][j + 1] === 1) {
                grid[i][j + 1] = 2;
                freshOrganges--;
                queue.push([i , j + 1]);
            }
            if(i - 1 >= 0 && grid[i - 1][j] === 1) {
                grid[i - 1][j] = 2;
                freshOrganges--;
                queue.push([i - 1 , j]);
            }
            if(j - 1 >= 0 && grid[i][j - 1] === 1) {
                grid[i][j - 1] = 2;
                freshOrganges--;
                queue.push([i, j - 1]);
            }
        }
        min++;
    }

    return freshOrganges === 0 ? min : -1;
};
