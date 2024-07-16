var dfs = function(grid, visited, i, j, row, col) {
    visited[i][j] = 1;
    if(i > 0 && grid[i - 1][j] === "1" && !visited[i - 1][j]) {
        dfs(grid, visited, i - 1, j, row, col);
    }
    if(j > 0 && grid[i][j - 1] === "1"  && !visited[i][j - 1]) {
        dfs(grid, visited, i, j - 1, row, col);
    }
    if(i < row - 1 && grid[i+1][j] === "1" && !visited[i + 1][j]) {
        dfs(grid, visited, i + 1, j, row, col);
    }
    if(j < col - 1 && grid[i][j + 1] === "1" && !visited[i][j + 1]) {
        dfs(grid, visited, i, j + 1, row, col);
    }
}

var numIslands = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    const visited = Array(row).fill([]).map(() => Array(col).fill(0));

    let count = 0;

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(!visited[i][j] && grid[i][j] === "1") {
                dfs(grid, visited, i, j, row, col);
                count++;
            }
        }
    }
    return count;
};



// Without extra space of visited array

var isValid = function(i, j, row, col) {
    if(i < 0 || i >= row || j < 0 || j >= col) {
        return false;
    }
    return true;
}
 
var dfs = function(grid, i, j, row, col) {
    if(grid[i][j] === "#" || grid[i][j] === "0") {
        return false;
    }
    
    grid[i][j] = "#";
    
    if(isValid(i - 1, j, row, col)) {
        dfs(grid, i - 1, j, row, col);    
    }
    
    if(isValid(i + 1, j, row, col)) {
        dfs(grid, i + 1, j, row, col);    
    }
    
    if(isValid(i, j - 1, row, col)) {
        dfs(grid, i, j - 1, row, col);        
    }
    
    if(isValid(i, j + 1, row, col)) {
        dfs(grid, i, j + 1, row, col);    
    }
}

var numIslands = function(grid) {
    const row = grid.length;
    const col = grid[0].length;

    let count = 0;
    
    for(let i = 0; i< row; i++) {
        for(let j = 0; j < col; j++) {
            if(grid[i][j] === "1") {
                count++;
                dfs(grid, i, j, row, col);
                
            }
        }
    }
    return count;
};