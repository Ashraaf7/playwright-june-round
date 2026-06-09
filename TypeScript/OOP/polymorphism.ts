abstract class Employee {
    protected name: string = "";
    protected age: number = 0;
    abstract employeeId: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    displayDetails(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    abstract calculateSalary(): void;
}


class Fulltime_Employee extends Employee {
    public salary: number = 0;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }
    displayDetails(): void {
        super.displayDetails();
        console.log(`Employee ID: ${this.employeeId}`);
        console.log(`Salary: ${this.salary}`);

    }

    calculateSalary(): void {
        this.salary = 50000; // Example fixed salary for full-time employees
    }
}

//parttime employee class 
class Parttime_Employee extends Employee {
    public hourlyRate: number = 0;
    public hoursWorked: number = 0;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }

    displayDetails(): void {
        super.displayDetails();
        console.log(`Employee ID: ${this.employeeId}`);
        console.log(`Hourly Rate: ${this.hourlyRate}`);
        console.log(`Hours Worked: ${this.hoursWorked}`);
    }



    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked; // Example salary calculation for part-time employees
    }
}


let ahmed = new Fulltime_Employee("Ahmed", 30, 12345);
ahmed.calculateSalary();


let sara = new Parttime_Employee("Sara", 25, 54321);
sara.hourlyRate = 20;
sara.hoursWorked = 15;
let saraSalary = sara.calculateSalary();



ahmed.displayDetails();
sara.displayDetails();




// setup()
// {
//     super.setup();
//     console.log("Setting up the test environment...");
// }