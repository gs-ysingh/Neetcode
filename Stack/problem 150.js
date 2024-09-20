function solve(a, b, op) {
    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else if (op === "*") {
      return a * b;
    } else if (op === "/") {
      return Math.trunc(a / b);
    }
  }
  
  var evalRPN = function(tokens) {
    const stack = [];
    const operators = ["+", "-", "/", "*"];
  
    for (let i = 0; i < tokens.length; i++) {
      if (operators.includes(tokens[i])) {
        const num1 = stack.pop();
        const num2 = stack.pop();
        const result = solve(num2, num1, tokens[i]);
        stack.push(result);
      } else {
        const num = parseInt(tokens[i]);
        stack.push(num);
      }
    }
    return stack.pop();
  };