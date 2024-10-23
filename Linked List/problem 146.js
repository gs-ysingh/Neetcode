function Node(key, value) {
    this.prev = null;
    this.next = null;
    this.key = key;
    this.value = value;
}

function DoublyLinkedList() {
    this.head = new Node(null, null);
    this.end = new Node(null, null);
    this.head.next = this.end;
    this.end.prev = this.head;
}

DoublyLinkedList.prototype.moveToHead = function(node) {
    this.removeNode(node);
    this.addToHead(node);
}
    
DoublyLinkedList.prototype.getLastNode = function() {
    if(this.end.prev) {
        return this.end.prev;
    }
    return null;
}
    
DoublyLinkedList.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}
    
DoublyLinkedList.prototype.addToHead = function(node) {
    this.head.next.prev = node;
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next = node;
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.counter = 0;
    this.map = new Map();
    this.list = new DoublyLinkedList();
};

LRUCache.prototype.get = function(key) {
    if(this.map.has(key)) {
        const node = this.map.get(key);
        this.list.moveToHead(node);
        return node.value; 
    }
    return -1;
};

LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)) {
        const node = this.map.get(key);
        node.value = value;
        this.list.moveToHead(node);
    } else {
        if(this.counter >= this.capacity) {
            const node = this.list.getLastNode();
            if(node) {
                this.map.delete(node.key);
                this.list.removeNode(node);
                this.counter--;
            }
        }
        const node = new Node(key, value);
        this.map.set(key, node);
        this.list.addToHead(node);
        this.counter++;
    }
};