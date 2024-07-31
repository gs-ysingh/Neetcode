var permute = function(nums) {
    if(nums.length === 0) {
        return [[]];
    }
    if(nums.length === 1) {
        return [[nums[0]]];
    }
    const result = [];
    const rest = permute(nums.slice(1));
    const first = nums[0];

    for(let i = 0; i < rest.length; i++) {
        const arr = rest[i];
        for(let j = 0; j <= rest[i].length; j++) {
            const newArr = arr.slice(0, j).concat(first, arr.slice(j));
            result.push([...newArr]);
        }
    }
    return result;
};