
function TrieNode() {
    this.children = {};
    this.endOfWord = false;
}

var WordDictionary = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.root;
    for(let c of word) {
        if(!curr.children[c]) {
            curr.children[c] = new TrieNode();
        }
        curr = curr.children[c];
    }
    curr.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */

function search(word, root) {
    if(word.length === 0 && root.endOfWord) {
        return true;
    }
    const c = word.charAt(0);
    if(c === ".") {
        for(let k of Object.keys(root.children)) {
            if(search(word.substring(1), root.children[k])) {
                return true;
            }
        }
        return false;
    }
    else if(!root.children[c]) {
        return false;
    }
    return search(word.substring(1), root.children[c]);
}

WordDictionary.prototype.search = function(word) {
    return search(word, this.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */