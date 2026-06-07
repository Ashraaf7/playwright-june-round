let name: string = "Ahmed";
//name = 6; // Error: Type 'number' is not assignable to type 'string'.
console.log(name);

let age: number = 50;
console.log(age);

let isStudent: boolean = false;
console.log(isStudent);

let x: any = "Hello";
x = 10;  // No error due to 'any' type, but it can lead to runtime errors if not used carefully.
console.log(x);

let nullvalue: null = null;
console.log(nullvalue);

let undefinedValue: undefined;
console.log(undefinedValue);
