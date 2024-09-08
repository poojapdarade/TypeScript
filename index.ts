console.log(5, 4, "hello world");

function add(a: number, b: number) {
  return a + b;
}

const x = add(2, 3);

x.toExponential();

interface User {
  name: string;
  age: number;
  isMember?: boolean;
}

const user: User = {
  age: 31,
  name: "John",
};

user.isMember?.valueOf();

const numbers: number[] = [5];
numbers.push(1, 2, 3, 4, 5);

const ab = numbers.map((value) => value * 2).filter((x) => x > 10);
