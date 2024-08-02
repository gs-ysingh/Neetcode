var letterCombinations = function(digits) {
    const result = [];
    const map = {
        "2": ['a', 'b', 'c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z']
    };
    function backtrack(i, currStr) {
        if(currStr.length === digits.length) {
            result.push(currStr);
            return;
        }
        const arr = map[digits[i]];
        for(let j = 0; j < arr.length; j++) {
            backtrack(i + 1, currStr + arr[j]);
        }
    }
    if(digits.length > 0) {
        backtrack(0, "");
    }
    return result;
};

// Using Iterative Approach
/*
var letterCombinations = function(digits) {
    let result = [];
    const map = {
        "2": ['a', 'b', 'c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z']
    };

    for(let i = 0; i < digits.length; i++) {
        const value = map[digits[i]];
        for(let j = 0; j < value.length; j++) {
            if(i === 0) {
                result.push(value[j]);
            } else {
                const temp = [];
                for(let k = 0; k < result.length; k++) {
                    const str = result[k] + value[j];
                    temp.push(str);
                }
                result = temp;
            }
        }
    }

    return result;
};
*/

console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]