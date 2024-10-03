// KMP algorithm to find all occurrences of 'pattern' in 'text'
function kmpSearch(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    const lps = computeLPSArray(pattern); // Precompute LPS array
    let i = 0; // index for text
    let j = 0; // index for pattern
    let indices = [];

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        if (j === m) {
            // Found a match
            indices.push(i - j); // Add the index where the match starts
            j = lps[j - 1]; // Reset j using the LPS array
        } else if (i < n && pattern[j] !== text[i]) {
            // Mismatch after j matches
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS to avoid unnecessary comparisons
            } else {
                i++;
            }
        }
    }
    return indices;
}

// Function to compute the LPS (Longest Prefix Suffix) array
function computeLPSArray(pattern) {
    const m = pattern.length;
    const lps = new Array(m).fill(0);
    let len = 0; // length of the previous longest prefix suffix
    let i = 1;

    while (i < m) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1]; // Fallback to previous longest prefix suffix
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

var beautifulIndices = function(s, a, b, k) {
    const result = new Set();
    const option1 = kmpSearch(s, a); // Find all indices of 'a' in 's' using KMP
    const option2 = kmpSearch(s, b); // Find all indices of 'b' in 's' using KMP

    let i = 0, j = 0;

    // Two-pointer technique to optimize index comparison
    while (i < option1.length && j < option2.length) {
        let x = option1[i];
        let y = option2[j];

        if (Math.abs(x - y) <= k) {
            result.add(x);  // Add valid index from option1
            i++;  // Move pointer `i` to check next `x`
        } else if (x < y) {
            i++;  // If `x` is smaller, move `i` forward
        } else {
            j++;  // If `y` is smaller, move `j` forward
        }
    }

    return Array.from(result);
};