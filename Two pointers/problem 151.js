var reverseWords = function(s) {
    const newString = s.replace(/\s+/g, " ").trim();
    const arr = newString.split(" ");
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr.join(" ");
};