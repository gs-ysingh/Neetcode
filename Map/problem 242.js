var isAnagram = function(s, t) {
    const arr = Array(26).fill(0);

    if(s.length !== t.length) {
        return false;
    }

    for(let i = 0; i < s.length; i++) {
        const index1 = s[i].charCodeAt() - 'a'.charCodeAt();
        const index2 = t[i].charCodeAt() - 'a'.charCodeAt();

        arr[index1] = arr[index1] + 1;
        arr[index2] = arr[index2] - 1;
    }

    return !arr.find((item) => item !== 0);
};