import { question } from "readline-sync";

export function main(): void {
  const firstString: string = question("Enter first number: \n");
  const operator: string = question("Enter operator: \n");
  const secondString: string = question("Enter second number: \n");

  const op = isOperator(operator);
  console.log(op);
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
