/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// created m*n matrix, set all can be converted to true

// find all the edge nodes that are 'O' and then do the dfs with that while doing so
// these nodes cannot be converted to 'X' - so mark them false in matrix

// later update the grid, in matrix if it's true then in grid mark that X

function isValid(i, j, rows, cols) {
    if(i < 0 || j < 0 || i >= rows || j >= cols) {
        return false;
    }
    return true;
}

function dfs(board, converted, i, j, rows, cols) {
    if(!converted[i][j] || board[i][j] === "X") {
        return;
    }

    converted[i][j] = false;
    const dirs = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
    ];

    for(let k = 0; k < dirs.length; k++) {
        const [dx, dy] = dirs[k];
        const newX = i + dx;
        const newY = j + dy;
        if(isValid(newX, newY, rows, cols)) {
            dfs(board, converted, newX, newY, rows, cols);
        }
    }
}

var solve = function(board) {
    const rows = board.length;
    const cols = board[0].length;
    const converted = Array(rows).fill([]).map(() => Array(cols).fill(true));

    for(let i = 0; i < rows; i++) {
        if(board[i][0] === "O") {
            dfs(board, converted, i, 0, rows, cols);
        }
        if(board[i][cols - 1] === "O") {
            dfs(board, converted, i, cols - 1, rows, cols);
        }
    }

    for(let j = 0; j < cols; j++) {
        if(board[0][j] === "O") {
            dfs(board, converted, 0, j, rows, cols);
        }
        if(board[rows - 1][j] === "O") {
            dfs(board, converted, rows - 1, j, rows, cols);
        }
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(converted[i][j]) {
                board[i][j] = "X";
            }
        }
    }
    return board;
};