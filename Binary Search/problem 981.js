
var TimeMap = function() {
    this.map = {};
};

function search(nums, target) {
    let l = 0;
    let h = nums.length - 1;
    let minIndex = -1;
    let m = 0;

    while(l <= h) {
        m = Math.floor((l + h) / 2);
        const [value, timestamp] = nums[m];
        // whenever searching in right side, update the min Index to m
        if(target >= timestamp) {
            l = m + 1;
            minIndex = m;
        } else {
            h = m - 1;
        }
    }
    return minIndex;
}


TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map[key]) {
        this.map[key] = [];
    }
    this.map[key].push([value, timestamp]);
};

TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map[key]) {
        return "";
    }
    const index = search(this.map[key], timestamp);
    if(index === -1) {
        return "";
    }
    const [value] = this.map[key][index];
    return value;
};