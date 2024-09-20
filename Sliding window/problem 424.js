var characterReplacement = function(s, k) {
    let l = 0;
    let r = 0;

    const freq = Array(26).fill(0);
    let max = 0;

    while(r < s.length) {
        const index = s.charAt(r).charCodeAt() - "A".charCodeAt();
        freq[index] = freq[index] + 1;

        const maxFreq = Math.max(...freq);
        const windowLen = r - l + 1;

        if(windowLen - maxFreq <= k) {
            max = Math.max(max, windowLen);
        } else {
            const index2 = s.charAt(l).charCodeAt() - "A".charCodeAt();
            freq[index2] = freq[index2] - 1;

            l++;
        }
        r++;
    }
    return max;
};