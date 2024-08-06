// MinPriorityQueue is only available in Leetcode, so it does not run outside

var leastInterval = function(tasks, n) {
    const map = {};
    for(let task of tasks) {
        if(!map[task]) {
            map[task] = 0;
        }
        map[task] = map[task] + 1;
    }
    const maxHeap = new MaxPriorityQueue();
    for(let value of Object.values(map)) {
        maxHeap.enqueue(value);
    }
    const queue = [];
    let time = 0;
    while(maxHeap.size() > 0 || queue.length > 0) {
        time++;

        if(maxHeap.size() > 0) {
            const updatedValue = maxHeap.dequeue().element - 1;
            if(updatedValue > 0) {
                const nextAvailable = time + n;
                queue.push([updatedValue, nextAvailable]);
            }
        }
        if(queue.length > 0 && queue[0][1] === time) {
            const [freq, next] = queue.shift();
            maxHeap.enqueue(freq);
        }    
    }
    return time;
};