var isValid = function(i, j, rows, cols) {
    return i >= 0 && j >= 0 && i < rows && j < cols;
};

var dfs = function(heights, i, j, rows, cols, ocean) {
    ocean[i][j] = true;
    
    const directions = [
        [1, 0], // down
        [0, 1], // right
        [-1, 0], // up
        [0, -1]  // left
    ];

    for (const [dx, dy] of directions) {
        const newX = i + dx;
        const newY = j + dy;
        if (isValid(newX, newY, rows, cols) && !ocean[newX][newY] && heights[newX][newY] >= heights[i][j]) {
            dfs(heights, newX, newY, rows, cols, ocean);
        }
    }
};

var pacificAtlantic = function(heights) {
    const rows = heights.length;
    const cols = heights[0].length;

    const pacific = Array(rows).fill([]).map(() => Array(cols).fill(false));
    const atlantic = Array(rows).fill([]).map(() => Array(cols).fill(false));

    for (let i = 0; i < rows; i++) {
        dfs(heights, i, 0, rows, cols, pacific);
        dfs(heights, i, cols - 1, rows, cols, atlantic);
    }

    for (let j = 0; j < cols; j++) {
        dfs(heights, 0, j, rows, cols, pacific);
        dfs(heights, rows - 1, j, rows, cols, atlantic);
    }

    const result = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
};

