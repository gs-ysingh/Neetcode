var isValid = function(s, start, end) {
    while(start < end) {
        if(s.charAt(start) === s.charAt(end)) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true;
}

var validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;

    while(start < end) {
        if(s.charAt(start) === s.charAt(end)) {
            start++;
            end--;
        } else {
            return isValid(s, start + 1, end) || isValid(s, start, end - 1);
        }
    }
    return true;
};