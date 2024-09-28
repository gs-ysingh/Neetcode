function minWindow(s, t) {
    if (t.length > s.length) return ""; // Edge case: t is larger than s
    
    const charCount = new Map();
    
    // Build a frequency map for t
    for (let char of t) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    let required = charCount.size;  // Number of unique characters in t to be matched
    let left = 0, right = 0;        // Window pointers
    let formed = 0;                 // How many unique characters in t are met in the current window
    let windowCounts = new Map();   // Map to store frequency of characters in the current window
    let minLen = Infinity;          // Length of the minimum window
    let ans = [-1, 0, 0];           // Start and end of the minimum window
    
    while (right < s.length) {
        let char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);
        
        // If the current character's count matches the required count in t
        if (charCount.has(char) && windowCounts.get(char) === charCount.get(char)) {
            formed++;
        }
        
        // Try to contract the window until it no longer contains all characters of t
        while (left <= right && formed === required) {
            char = s[left];
            
            // Save the smallest window
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                ans = [left, right];
            }
            
            // Shrink the window
            windowCounts.set(char, windowCounts.get(char) - 1);
            // and condition is required, because if we encounter another char that not resulted 
            // decrease, we should not decrease formed
            if (charCount.has(char) && windowCounts.get(char) < charCount.get(char)) {
                formed--;
            }
            
            left++;
        }
        
        // Expand the window
        right++;
    }
    
    return ans[0] === -1 ? "" : s.slice(ans[0], ans[1] + 1);
}
