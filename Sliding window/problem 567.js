var checkInclusion = function(s1, s2) {
    const arr1 = Array(26).fill(0);
    const arr2 = Array(26).fill(0);

    if (s2.length < s1.length) {
        return false;
    }

    for (let i = 0; i < s1.length; i++) {
        const index1 = s1.charCodeAt(i) - 'a'.charCodeAt();
        arr1[index1]++;

        const index2 = s2.charCodeAt(i) - 'a'.charCodeAt();
        arr2[index2]++;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (arr1[i] === arr2[i]) {
            matches++;
        }
    }

    for (let i = s1.length; i < s2.length; i++) {
        if (matches === 26) {
            return true;
        }

        const indexOut = s2.charCodeAt(i - s1.length) - 'a'.charCodeAt();
        const indexIn = s2.charCodeAt(i) - 'a'.charCodeAt();

        arr2[indexIn]++;
        if (arr2[indexIn] === arr1[indexIn]) {
            matches++;
        } else if (arr2[indexIn] === arr1[indexIn] + 1) {
            matches--;
        }

        arr2[indexOut]--;
        if (arr2[indexOut] === arr1[indexOut]) {
            matches++;
        } else if (arr2[indexOut] === arr1[indexOut] - 1) {
            matches--;
        }
    }

    return matches === 26;
};