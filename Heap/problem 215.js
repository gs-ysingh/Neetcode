var findKthLargest = function(nums, k) {
  const minHeap = new MinHeap();
  for (const num of nums) {
    minHeap.push(num);
    if (minHeap.size() > k) minHeap.pop();
  }
  return minHeap.top();
};
