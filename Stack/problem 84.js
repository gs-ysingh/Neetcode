var largestRectangleArea = function(heights) {
    const stack = [];
    let maxArea = 0;

    for(let i = 0; i < heights.length; i++) {
        let start = i;
        while(stack.length > 0 && heights[i] < stack[stack.length - 1][1]) {
            const [index, h] = stack.pop();
            maxArea = Math.max((i - index) * h, maxArea); 
            start = index;
        }
        stack.push([start, heights[i]]);
    }

    for(let i = stack.length - 1; i >= 0; i--) {
        const [index, h] = stack[i];
        maxArea = Math.max((heights.length - index) * h, maxArea);
    }
    return maxArea;
};