function getMiddleNode(head) {
    let slow = head;
    let fast = head;

    // Find the middle node using slow and fast pointers
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;  // This returns the middle node
}

function reverseList(head) {
    let prev = null;
    let current = head;
    let next = null;

    // Reverse the linked list
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;  // Return the new head of the reversed list
}

function mergeList(head, lastNode) {
    let first = head;
    let last = lastNode;
    let temp1, temp2;

    // Merge the two lists one by one
    while (last) {
        temp1 = first.next; // Save the next node of the first half
        temp2 = last.next;  // Save the next node of the second half (reversed)

        first.next = last;  // Link the first half node to the second half node
        last.next = temp1;  // Link the second half node to the next node of the first half

        first = temp1;  // Move to the next node of the first half
        last = temp2;   // Move to the next node of the second half
    }

    return head;
}

// Usage example to merge a linked list
function reorderList(head) {
    if (!head || !head.next) return head;

    // Step 1: Get the middle node
    let middle = getMiddleNode(head);

    // Step 2: Reverse the second half of the list
    let secondHalf = reverseList(middle.next);
    middle.next = null;  // Cut the list into two halves

    // Step 3: Merge the two halves
    return mergeList(head, secondHalf);
}
