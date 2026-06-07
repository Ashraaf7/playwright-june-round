let arr: string[] = ["Ahmed", "Ali", "Hassan", "Omar"];



let arr2: string[] = new Array("Ahmed", "Ali", "Hassan", "Omar");

arr2.unshift("Youssef"); // add element at the beginning of the array
arr2.shift(); // remove the first element of the array

arr2.push("Youssef"); // add element at the end of the array
arr2.pop(); // remove the last element of the array

for (const name of arr2) {
    console.log(name);
}