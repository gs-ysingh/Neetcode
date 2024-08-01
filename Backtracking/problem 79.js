var dfs = function(board, rows, cols, i, j, word, index) {
    if(index === word.length) {
        return true;
    }
    if(i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] !== word.charAt(index)) {
        return false;
    }
    const temp = board[i][j];
    board[i][j] = "#";

    const dirs = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1]
    ];

    for(let k = 0; k < dirs.length; k++) {
        const dx = dirs[k][0];
        const dy = dirs[k][1];
        const newX = i + dx;
        const newY = j + dy;
        if(dfs(board, rows, cols, newX, newY, word, index + 1)) {
            return true;
        }
    }

    board[i][j] = temp;
    return false;
}

var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(board[i][j] === word.charAt(0)) {
                if(dfs(board, rows, cols, i, j, word, 0)) {
                    return true;
                }
            }
        }
    }
    return false;
};
