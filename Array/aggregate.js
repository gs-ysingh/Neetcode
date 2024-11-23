const list1 = [[1, 3], [3, 1], [5, 3], [6, 4], [10, 1]];
const list2 = [[2, 3], [6, 3], [9, 2]];

const output = [[1, 6], [2, 4], [3, 4], [5,6], [6, 7], [9, 3], [10,1]];

function aggregate(list1, list2) {
    const result = [];
    for(let i = 0; i < list1.length; i++) {
        const x = list1[i][0];
        const y = list1[i][1];

        result[x] = [y, undefined];
    }

    for(let i = 0; i < list2.length; i++) {
        const x = list2[i][0];
        const y = list2[i][1];

        if(result[x] && result[x][0]) {
            result[x][1] = y;
        } else {
            result[x] = [undefined, y];
        }
    }

    let prevX = result[result.length - 1][0];
    let prevY = result[result.length - 1][1];

    for(let i = result.length - 2; i >= 0; i--) {
        if(result[i] === undefined) {
            continue;
        }

        if(result[i][0] === undefined) {
            result[i][0] = prevX;
        }

        if(result[i][1] === undefined) {
            result[i][1] = prevY;
        }

        prevX = result[i][0];
        prevY = result[i][1]
    }

    const final = [];

    for(let i = 0; i < result.length; i++) {
        if(result[i]) {
            final.push([i, result[i][0] || 0 + result[i][1] || 0]);
        }
    }

    return final;
}

console.log(aggregate(list1, list2));