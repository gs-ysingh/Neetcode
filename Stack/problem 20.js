/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map();
    
    map.set(")", "(");
    map.set("}", "{");
    map.set("]", "[");

    const stack = [];

    for(const c of s) {
        if(c === "(" || c === "{" || c === "[") {
            stack.push(c);
        } else if(map.get(c) === stack[stack.length - 1]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};