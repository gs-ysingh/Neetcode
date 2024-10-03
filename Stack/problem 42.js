var trap = function(height) {
    const leftToRight = [];
    const rightToLeft = [];
    const len = height.length;

    let max = height[0];
    for(let i = 1; i < len - 1; i++) {
        max = Math.max(max, height[i - 1]);
        leftToRight[i] = max;
    }

    max = height[len - 1];
    for(let i = len - 2; i >= 1; i--) {
        max = Math.max(max, height[i + 1]);
        rightToLeft[i] = max;
    }

    let area = 0;
    for(let i = 1; i < len - 1; i++) {
        const waterHeight = Math.min(leftToRight[i], rightToLeft[i]) - height[i];
        if(waterHeight >= 0) {
            area = area + waterHeight;
        }
    }

    return area;
};