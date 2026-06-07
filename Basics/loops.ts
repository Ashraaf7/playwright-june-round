//for
let arr: number[] = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    // 0 1 2 3 4 5 6 7 8 9 10 ... 11
    console.log(arr[i]);
}

console.log("-------------------");

//while
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}
console.log("-------------------");


//do while
let k = 0;
do {
    console.log(arr[k]);
    k++;
} while (k < arr.length);