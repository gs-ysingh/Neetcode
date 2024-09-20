var removeNthFromEnd = function(head, n) {
    let length = 0;
    let current = head;
    
    // Calculate the length of the linked list
    while (current) {
      current = current.next;
      length++;
    }
    
    // Handle edge cases
    if (length === n) {
      return head.next;
    }
    
    current = head;
    for (let i = 0; i < length - n - 1; i++) {
      current = current.next;
    }
    
    // Remove the nth node from the end
    current.next = current.next.next;
    
    return head;
  };