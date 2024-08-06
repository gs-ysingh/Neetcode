
var MedianFinder = function() {
    this.minHeap = new MinPriorityQueue();
    this.maxHeap = new MaxPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.size() === 0 || num <= this.maxHeap.front().element) {
        this.maxHeap.enqueue(num);
    } else {
        this.minHeap.enqueue(num);
    }

    if(this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.enqueue(this.minHeap.dequeue().element);
    }
    if(this.maxHeap.size() - this.minHeap.size() >= 2) {
        this.minHeap.enqueue(this.maxHeap.dequeue().element);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const minHeapSize = this.minHeap.size();
    const maxHeapSize = this.maxHeap.size();
    const total = minHeapSize + maxHeapSize;

    if(total % 2 === 0) {
        return (this.maxHeap.front().element + this.minHeap.front().element) / 2;
    }
    return this.maxHeap.front().element;
};