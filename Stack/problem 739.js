/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const result = Array(temperatures.length).fill(0);
    const stack = [];

    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
            const top = stack.pop();
            const index = top[1];
            result[index] = i - index;
        }
        stack.push([temperatures[i], i]);
    }
    return result;
};