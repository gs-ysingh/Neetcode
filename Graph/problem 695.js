/**
 * @param {number[][]} grid
 * @return {number}
 */

// Iterate entire matrix
// when there is #1, then start a dfs that will return the area 
// store a count = 0.
// compare the area returned from dfs to count and store max
// dfs - while calling recursive dfs, always increase 1
// How do I keep track of visited nodes - whenever there is 1 - make it 2, so that
// we don't have to create another visited array

var dfs = function(grid, i, j, rows, cols) {
    if(i < 0 || j < 0 || i >= rows || j >= cols) {
        return 0;
    }

    if(grid[i][j] === 0 || grid[i][j] === 2) {
        return 0;
    }

    grid[i][j] = 2;

    return 1 + dfs(grid, i + 1, j, rows, cols) + 
        dfs(grid, i - 1, j, rows, cols) +
        dfs(grid, i, j - 1, rows, cols) + 
        dfs(grid, i, j + 1, rows, cols);
}

var maxAreaOfIsland = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let max = 0;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] === 1) {
                max = Math.max(max, dfs(grid, i, j, rows, cols));
            }
        }
    }
    return max;
};