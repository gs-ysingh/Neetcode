var solveNQueens = function(n) {
    const posDiag = new Set();
    const negDiag = new Set();
    const cols = new Set();
    const result = [];
    const grid = Array(n).fill([]).map(() => Array(n).fill("."));

    function backtrack(r) {
        if(r === n) {
            const temp = [];
            for(let i = 0; i < n; i++) {
                temp.push(grid[i].join(""));
            }
            result.push([...temp]);
        }
        for(let c = 0; c < n; c++) {
            if(cols.has(c) || negDiag.has(r + c) || posDiag.has(r - c)) {
                continue;
            }
            cols.add(c);
            negDiag.add(r + c);
            posDiag.add(r - c);
            grid[r][c] = "Q";

            backtrack(r + 1);

            cols.delete(c);
            negDiag.delete(r + c);
            posDiag.delete(r - c);
            grid[r][c] = ".";
        }
    }


    backtrack(0);
    return result;
};