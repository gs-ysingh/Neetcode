// MinPriorityQueue is only available in Leetcode, so it does not run outside

var kClosest = function(points, k) {
    this.minHeap = new MinPriorityQueue();
    for(let i = 0; i < points.length; i++) {
        const [x, y] = points[i];
        this.minHeap.enqueue(points[i], x * x + y * y);
    }
    const result = [];
    while(result.length < k) {
        result.push(this.minHeap.dequeue().element);
    }
    return result;
};