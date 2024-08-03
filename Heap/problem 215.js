var findKthLargest = function(nums, k) {
    this.minHeap = new MinPriorityQueue();
    for(let i = 0; i < k; i++) {
        this.minHeap.enqueue(nums[i]);
    }
    for(let i = k; i < nums.length; i++) {
        if(nums[i] > this.minHeap.front().element) {
            this.minHeap.dequeue();
            this.minHeap.enqueue(nums[i]);
        }
    }

    return this.minHeap.front().element;
};