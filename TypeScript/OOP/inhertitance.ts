
class Employee {
    protected name: string = "";
    protected age: number = 0;
    private employeeId: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    displayDetails(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

}


class Fulltime_Employee extends Employee {
    public salary: number = 0;
    calculateSalary(): void {
        this.salary = 50000; // Example fixed salary for full-time employees
    }
}

//parttime employee class 
class Parttime_Employee extends Employee {
    public hourlyRate: number = 0;
    public hoursWorked: number = 0;
    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked; // Example salary calculation for part-time employees
    }
}


let ahmed = new Fulltime_Employee("Ahmed", 30);
ahmed.calculateSalary();


let sara = new Parttime_Employee("Sara", 25);
sara.hourlyRate = 20;
sara.hoursWorked = 80;
let saraSalary = sara.calculateSalary();




console.log(`Ahmed's Salary: ${ahmed.salary}`);
console.log(`Sara's Salary: ${saraSalary}`);