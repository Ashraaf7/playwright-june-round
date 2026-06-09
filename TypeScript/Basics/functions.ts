//login without function
console.log("fill username");
console.log("fill password");
console.log("click on login button");

//function definition
function hi(name: string) {
    console.log(`Hi, ${name}!`);
}

//function call
hi("Ashraf");
hi("John");
hi("Jane");


//login with function
function login(username: string, password: string) {
    console.log("fill username: " + username);
    console.log("fill password: " + password);
    console.log("click on login button");
}

login("test", "test123");


function sum(number1: number, number2: number = 15): number {
    return number1 + number2;
}

const result = sum(10);
console.log(result)

//arrow function 
const multiply = (x: number, y: number): number => { return x * y; }

console.log(multiply(5, 20));