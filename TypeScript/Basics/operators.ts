let number1: number = 10;
let number2: number = 5;

// Addition
let sum = number1 + number2;
console.log(`Sum: ${sum}`);

// Subtraction
let difference = number1 - number2;
console.log(`Difference: ${difference}`);

// Multiplication
let product = number1 * number2;
console.log(`Product: ${product}`);

// Division
let quotient = number1 / number2;
console.log(`Quotient: ${quotient}`);

// Modulus
let remainder = number1 % number2;
console.log(`Remainder: ${remainder}`);

// Assignment Operators
let sum2: number = number1 + number2; // Using the previously calculated sum
number1 += 5; // Equivalent to number1 = number1 + 5
console.log(`Updated number1: ${number1}`);



// Comparison Operators
let x: number = 10;
let y: number = 10;
console.log(x == y); // true

let arr: number[] = [1, 2, 3];
let arr2: number[] = [1, 2, 3];
console.log(arr === arr2); // false - because they reference different objects in memory



// Logical Operators
let a: boolean = true;
let b: boolean = false;

console.log(a && b); // false   
console.log(a || b); // true
console.log(!a);     // false