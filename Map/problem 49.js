var groupAnagrams = function(strs) {
    const map = new Map();
    for(const str of strs) {
        const arr = Array(26).fill(0);

        for(const c of str) {
            const index = c.charCodeAt() - 'a'.charCodeAt();
            arr[index] = arr[index] + 1;
        }

        const key = arr.join("#");
        if(map.has(key)) {
            map.set(key, map.get(key).concat(str))
        } else {
            map.set(key, [str]);
        }
    }

    const result = [];

    map.forEach((value, key) => {
        result.push(value);
    });

    return result;
};