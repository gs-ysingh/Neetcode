var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)) {
        return 0;
    }

    // Create adjacency list
    const adjMap = new Map();
    for(const word of wordList) {
        for(let i = 0; i < word.length; i++) {
            const pattern = word.substring(0, i) + "*" + word.substring(i + 1);
            if(!adjMap.has(pattern)) {
                adjMap.set(pattern, []);
            }
            adjMap.get(pattern).push(word);
        }
    }

    const queue = [beginWord];
    const visited = new Set(beginWord);
    let count = 1;

    while(queue.length > 0) {
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const word = queue.shift();
            if(word === endWord) {
                return count;
            }
            for(let j = 0; j < word.length; j++) {
                const pattern = word.substring(0, j) + "*" + word.substring(j + 1);
                const list = adjMap.has(pattern) ? adjMap.get(pattern) : [];
                for(const str of list) {
                    if(!visited.has(str)) {
                        visited.add(str);
                        queue.push(str);
                    }
                }
            }
        }
        count++;
    }
    return 0;
};