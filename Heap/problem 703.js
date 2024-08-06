// MinPriorityQueue is only available in Leetcode, so it does not run outside

var KthLargest = function(k, nums) {
    this.minHeap = new MinPriorityQueue();
    this.k = k;
    for(let i = 0; i < nums.length; i++) {
        this.minHeap.enqueue(nums[i]);
        if(this.minHeap.size() > this.k) {
            this.minHeap.dequeue().element;
        }
    }
};

KthLargest.prototype.add = function(val) {
    this.minHeap.enqueue(val);
    if(this.minHeap.size() > this.k) {
        this.minHeap.dequeue().element;
    }
    return this.minHeap.front().element;
};