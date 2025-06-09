// Can use switch case or if statements
// Remember the default case at the end (the error case)

function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid Operator");
  }

  console.log(result);
}

calculator(6, 3, "*");
calculator(10, 2, "/");
calculator(8, 6, "-");

// Can also solve using If statements

function calculator2(num1, num2, operator) {
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    throw new Error("Invalid Operator");
  }

  console.log(result);
}

calculator2(6, 7, "+");
calculator2(20, 3, "*");
calculator2(6, 7, "^");
