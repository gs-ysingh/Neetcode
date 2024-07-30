function getIndex(m, rows, cols) {
    let count = -1;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            count++;
            if(count === m) {
                return [i, j];
            }
        }
    }
}

function getOptimizedIndex(m, cols) {
    const x = Math.floor(m / cols);
    const y = m % cols;
    return [x, y];
}

var searchMatrix = function(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let l = 0;
    let h = (rows * cols) - 1
    let m = 0;

    while(l <= h) {
        m = Math.floor((l + h) / 2);
        const [x, y] = getOptimizedIndex(m, cols);
        if(target === matrix[x][y]) {
            return true;
        } else if(target < matrix[x][y]) {
            h = m - 1
        } else {
            l = m + 1;
        }
    }
    return false;
};