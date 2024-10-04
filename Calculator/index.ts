import { question } from "readline-sync";
type Operator = "+" | "-" | "*" | "/";

export function main(): void {
  const firstString: string = question("Enter first number: \n");
  const operator: string = question("Enter operator: \n");
  const secondString: string = question("Enter second number: \n");

  const validInput: boolean =
    isNumber(firstString) && isOperator(operator) && isNumber(secondString);
  console.log(validInput);

  if (validInput) {
    console.log("is valid");
    const firstNum: number = parseInt(firstString);
    const secondNum: number = parseInt(secondString);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
  } else {
    console.log("Invalid Input \n");
    main();
  }
}

function calculate(firstNum: number, operator: string, secondNum: number) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
}

function isOperator(operator: string): boolean {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}

function isNumber(str: string): boolean {
  const mayBeNumber = parseInt(str);
  const isNum: boolean = !isNaN(mayBeNumber);
  return isNum;
}

main();
