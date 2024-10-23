function minWindow(s, t) {
    if (t.length > s.length) {
        return "";
    }

    const tMap = new Map();
    let l = 0;
    let r = 0;
    let min = Infinity;
    let ans = [-1, 0, 0]; // -1 is for length tracking
    
    for (const c of t) {
        tMap.set(c, (tMap.get(c) || 0) + 1);
    }

    const required = tMap.size;
    let formed = 0;

    const sMap = new Map();

    while (r < s.length) {
        const c = s.charAt(r);
        sMap.set(c, (sMap.get(c) || 0) + 1);

        if (tMap.has(c) && sMap.get(c) === tMap.get(c)) {
            formed++;
        }

        while (formed === required) {
            if (r - l + 1 < min) {
                min = r - l + 1;
                ans = [min, l, r];
            }

            const char = s.charAt(l);
            sMap.set(char, sMap.get(char) - 1);

            if (tMap.has(char) && sMap.get(char) < tMap.get(char)) {
                formed--;
            }

            l++;
        }

        r++;
    }

    return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
}
