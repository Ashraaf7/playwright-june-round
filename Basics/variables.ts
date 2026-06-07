if (true) {
    let name = "Ahmed"; //block - local
    //name = 50; // Error: Type 'number' is not assignable to type 'string'.
    console.log(name);
    name = "Ali";
    console.log(name);
}

//console.log(name); // Error: 'name' is not defined outside the block.

if (true) {
    var age = 30; // global
    console.log(age);
    age = 31;
    console.log(age);
}
console.log(age); // 31 - 'age' is accessible outside the block due to 'var' scoping rules.


const country = "Egypt"; // global - constant
//country = "USA"; // Error: Cannot assign to 'country' because it is a constant.