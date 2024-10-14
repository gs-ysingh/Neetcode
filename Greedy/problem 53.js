var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
      // Update sum: add the current number or restart if sum goes negative
      if (sum < 0) {
        sum = nums[i];
      } else {
        sum += nums[i];
      }
      
      // Track the maximum sum encountered
      maxSum = Math.max(sum, maxSum);
    }
    
    return maxSum;  
  };

  
  var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
      // Update the sum: either add the current number or start new from current number
      sum = Math.max(nums[i], sum + nums[i]);
      
      // Keep track of the maximum sum encountered
      maxSum = Math.max(sum, maxSum);
    }
    
    return maxSum;  
  };
  