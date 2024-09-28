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


  function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);  // Create a dummy node
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    
    // Move the first pointer N+1 steps ahead (so it's N steps ahead of second)
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    
    // Move both pointers until first reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    
    // Now, second is just before the node to be deleted
    second.next = second.next.next;  // Remove the N-th node

    return dummy.next;  // Return the head of the new list
}
