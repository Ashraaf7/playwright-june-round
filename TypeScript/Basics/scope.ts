//block scope
if (true) {
    var msg = "Hello World 1";
    console.log(msg);
}

console.log(msg); // Error: msg is not defined


//local scope
function test() {
    var msg1 = "Hello World 2";
    console.log(msg1);
}
console.log(msg);
//console.log(msg1); // Error: msg1 is not defined

// global scope
//let msg = "Hello World";
//console.log(msg);