var topKFrequent = function(nums, k) {
    const arr = Array(nums.length + 1).fill().map(() => []);
    const map = new Map();
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const [key, value] of map) {
        arr[value].push(key);
    }

    const result = [];
    for(let i = arr.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...arr[i]);
    }
    return result;
};