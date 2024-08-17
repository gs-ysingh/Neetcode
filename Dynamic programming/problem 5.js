var longestPalindrome = function(s) {
    let maxLen = 0;
    let startIndex = 0;
    let endIndex = 0;

    for(let i = 0; i < s.length; i++) {
        longestPalindromeStr(s, i, i);
        longestPalindromeStr(s, i, i + 1);
    }

    function longestPalindromeStr(s, i, j) {
        while(i >= 0 && j < s.length && s.charAt(i) === s.charAt(j)) {
            i--;
            j++;
        }
        if(j - i + 1 > maxLen) {
            maxLen = j - i + 1;
            startIndex = i + 1;
            endIndex = j - 1;
        }
    }
    return s.substring(startIndex, endIndex + 1);
};