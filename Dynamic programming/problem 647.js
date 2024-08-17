var countSubstrings = function(s) {
    var total = 0;
    for(let i = 0; i < s.length; i++) {
        countStr(s, i, i);
        countStr(s, i, i + 1);
    }
    function countStr(s, i, j) {
        while(i >= 0 && j < s.length && s.charAt(i) === s.charAt(j)) {
            i--;
            j++;
            total++;
        }
    }

    return total;
};