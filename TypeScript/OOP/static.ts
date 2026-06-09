

class Emplyees {
    name: string = "";
    static count: number = 0;
    constructor(name: string) {
        this.name = name;
        Emplyees.count++;
    }

    static getEmplyeeCount() {
        return Emplyees.count;
    }


}

let emp1 = new Emplyees("John"); //1
let emp2 = new Emplyees("Jane"); //2
let emp3 = new Emplyees("Doe"); //3
let emp4 = new Emplyees("Smith"); //4



console.log(Emplyees.getEmplyeeCount()); // Output: 4

