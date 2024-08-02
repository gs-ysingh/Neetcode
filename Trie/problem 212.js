function TrieNode() {
    this.children = {};
    this.endOfWord = false;
}

function Trie() {
    this.root = new TrieNode();
}

Trie.prototype.insert = function(word) {
    let curr = this.root;
    for(let c of word) {
        if(!curr.children[c]) {
            curr.children[c] = new TrieNode();
        }
        curr = curr.children[c];
    }
    curr.endOfWord = true;
}

Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    for(let c of prefix) {
        if(!curr.children[c]) {
            return false;
        }
        curr = curr.children[c];
    }
    return true;
}

Trie.prototype.search = function(word) {
    let curr = this.root;
    for(let c of word) {
        if(!curr.children[c]) {
            return false;
        }
        curr = curr.children[c];
    }
    return curr.endOfWord;
}

var findWords = function(board, words) {
    const trie = new Trie();
    for(let word of words) {
        trie.insert(word);
    }

    const rows = board.length;
    const cols = board[0].length;
    const result = new Set();

    function dfs(i, j, str, node) {
        if(!isValid(i, j) || board[i][j] === "#" || !node.children[board[i][j]]) return;
        str += board[i][j];
        node = node.children[board[i][j]];

        if(node.endOfWord) {
            result.add(str);
        }
        
        const temp = board[i][j];
        board[i][j] = "#";

        const dirs = [
            [0, -1], // left
            [-1, 0], // up
            [0, 1],  // right
            [1, 0]   // down
        ];

        for(let [dx, dy] of dirs) {
            const newX = i + dx;
            const newY = j + dy;
            dfs(newX, newY, str, node);
        }

        board[i][j] = temp;
    }

    function isValid(x, y) {
        return x >= 0 && y >= 0 && x < rows && y < cols;
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            dfs(i, j, "", trie.root);
        }
    }
    return Array.from(result);
};
