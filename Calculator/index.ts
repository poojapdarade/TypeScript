import { question } from "readline-sync";

export function main(): void {
  const firstString: string = question("Enter first number: \n");
  console.log(firstString);
}

main();
