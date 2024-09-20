function validateRows(board) {
    const rows = board.length;
    const cols = board[0].length;

    for(let i = 0; i < rows; i++) {
        const set = new Set();
        for(let j = 0; j < cols; j++) {
            if(set.has(board[i][j])) {
                return false;
            }
            if(board[i][j] !== ".") {
                set.add(board[i][j]);
            }
        }
    }

    return true;
}

function validateCols(board) {
    const rows = board.length;
    const cols = board[0].length;

    for(let i = 0; i < cols; i++) {
        const set = new Set();
        for(let j = 0; j < rows; j++) {
            if(set.has(board[j][i])) {
                return false;
            }
            if(board[j][i] !== ".") {
                set.add(board[j][i]);
            }
        }
    }
    return true;
}

function validateGrids(board) {
    const rows = board.length;
    const cols = board[0].length;

    for(let i = 0; i < rows; i = i + 3) {
        for(let j = 0; j < cols; j = j + 3) {
            const set = new Set();

            for(let k = i; k < i + 3; k++) {
                for(let l = j; l < j + 3; l++) {
                    if(set.has(board[k][l])) {
                        return false;
                    }
                    if(board[k][l] !== ".") {
                        set.add(board[k][l]);
                    }
                }
            }
        }
    }

    return true;
}

var isValidSudoku = function(board) {
    return validateRows(board) && validateCols(board) && validateGrids(board);  
};