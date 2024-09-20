const isAlphaNumeric = function(c) {
    const code = c.charCodeAt();
    return (code >= "0".charCodeAt() && code <= "9".charCodeAt()) || (code >= "a".charCodeAt() && code <= "z".charCodeAt()) || (code >= "A".charCodeAt() && code <= "Z".charCodeAt());
}

var isPalindrome = function(s) {
    const len = s.length;
    let i = 0;
    let j = len - 1;

    while(i <= j) {
        const startChar = s.charAt(i);
        const endChar = s.charAt(j);
        if(!isAlphaNumeric(startChar)) {
            i++;
        } else if(!isAlphaNumeric(endChar)) {
            j--;
        }
        else if(startChar.toLowerCase() === endChar.toLowerCase()) {
         i++;
         j--;   
        } else {
            return false;
        }
    }

    return true;
};