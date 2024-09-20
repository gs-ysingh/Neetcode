var addTwoNumbers = function(l1, l2) {
    let res = null;
    let carry = 0;
    let sum = 0;
    let temp = null;
    
    while(l1 || l2) {
        sum = 0;
        if(l1) {
            sum = sum + l1.val; 
            l1 = l1.next;
        }
        if(l2) {
            sum = sum + l2.val;    
            l2 = l2.next;
        }
        
        sum = sum + carry;
        
        if(sum > 9) {
            carry = 1;
            sum = sum % 10;
        }
        else {
            carry = 0;
        }
        
        if(res) {
            temp = res;
            while(temp.next) {
                temp = temp.next;
            }
            temp.next = new ListNode(sum);
        }
        else {
            res = new ListNode(sum);
        }
        
    }
    
    if(carry > 0) {
        if(res) {
            temp = res;
            while(temp.next) {
                temp = temp.next;
            }
            temp.next = new ListNode(carry);
        }
        else {
            res = new ListNode(carry);
        }
    }
    
    return res;
};