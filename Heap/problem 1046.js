// MinPriorityQueue is only available in Leetcode, so it does not run outside

var lastStoneWeight = function(stones) {
    this.maxHeap = new MaxPriorityQueue();

    for(const w of stones) {
        this.maxHeap.enqueue(w);
    }

    while(this.maxHeap.size() > 1) {
        const x = this.maxHeap.dequeue().element;
        const y = this.maxHeap.dequeue().element;

        if(x !== y) {
            this.maxHeap.enqueue(x - y);
        }
    }
    return this.maxHeap.size() > 0 ? this.maxHeap.front().element : 0;
};