// MinPriorityQueue is only available in Leet code, so it does not run outside

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


// Another approach - consistent
var kClosest = function(points, k) {
    this.maxHeap = new MaxPriorityQueue();
    for(let i = 0; i < points.length; i++) {
        const [x, y] = points[i];
        const dist = x * x + y * y;
        if(i < k) {
            this.maxHeap.enqueue(points[i], dist);
        } else if(dist < this.maxHeap.front().priority) {
            this.maxHeap.dequeue();
            this.maxHeap.enqueue(points[i], dist);
        }
    }
    const result = [];
    while(this.maxHeap.size() > 0) {
        result.push(this.maxHeap.dequeue().element);
    }
    return result;
};