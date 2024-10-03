import { question } from "readline-sync";

export function main(): void {
  const firstString: string = question("Enter first number: \n");
  const operator: string = question("Enter operator: \n");
  const secondString: string = question("Enter second number: \n");

  const firstNum = isNumber(firstString);
  console.log(firstNum);
}

function isOperator(operator: string): boolean {
  return operator==="+"
  switch (operator) {
  case "+";
  case "-";
  case "*";
  case "/";
  return true; 

  
}
}

function isNumber(str: string): boolean {
  const mayBeNumber = parseInt(str);
  const isNum: boolean = !isNaN(mayBeNumber);
  return isNum;
}

main();
