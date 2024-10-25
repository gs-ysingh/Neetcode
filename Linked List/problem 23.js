var reverse = function(start, end) {
    let prev = start;
    let current = start.next;
    let first = current; // Track the first node in the sublist to reattach after reversal

    while (current !== end) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    start.next = prev;     // Reattach the start node to the last node in the reversed sublist
    first.next = current;  // Reattach the first node in the reversed sublist to the next node after `end`
    
    return first; // Return the last node in the reversed sublist as the new `begin`
};

var reverseKGroup = function(head, k) {
    let begin = new ListNode(-1);
    let dummy = begin;
    begin.next = head;
    let i = 0;
    
    while (head !== null) {
        i++;
        if (i % k === 0) {
            begin = reverse(begin, head.next);
            head = begin.next;
        } else {
            head = head.next;
        }
    }
    
    return dummy.next;
};
