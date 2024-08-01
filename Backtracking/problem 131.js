function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i <= j) {
        if (str.charAt(i) !== str.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

var partition = function(s) {
    const result = [];
    const part = [];

    function dfs(i) {
        if(i >= s.length) {
            result.push([...part]);
            return;
        }
        for(let j = i; j < s.length; j++) {
            const str = s.substring(i, j + 1);
            if(isPalindrome(str)) {
                part.push(str);
                dfs(j + 1);
                part.pop();
            }
        }
    }
    dfs(0);
    return result;
};