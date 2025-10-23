/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const leftToRight = [];
    const rightToleft = [];

    let max = height[0];
    for(let i = 1; i < height.length - 1; i++) {
        max = height[i] > max ? height[i] : max;
        leftToRight[i] = max;
    }

    max = height[height.length - 1];
    for(let i = height.length - 2; i > 0; i--) {
        max = height[i] > max ? height[i] : max;
        rightToleft[i] = max;
    }
    
    let area = 0;
    for(let i = 1; i < height.length - 1; i++) {
        const water = Math.min(leftToRight[i], rightToleft[i]) - height[i];
        if(water > 0) {
            area = area + water;
        }
    }
    return area;
};
