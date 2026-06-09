class Player {
    //Attributes
    name: string = "";
    age: number = 0;
    team: string = "";
    country: string = "";

    //Constructor
    constructor(name: string, age: number, team: string);
    constructor(name: string, age: number, team: string, country: string);

    constructor(name: string, age: number, team: string, country?: string) {
        this.name = name;
        this.age = age;
        this.team = team;
        if (country) {
            this.country = country;
        }
    }


    // Methods
    printDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Team: ${this.team}`);
        if (this.country) {
            console.log(`Country: ${this.country}`);
        }
    }
}

let Ronaldo = new Player("Cristiano Ronaldo", 39, "Manchester United");
Ronaldo.country = "Portugal";
Ronaldo.printDetails();

let Messi = new Player("Lionel Messi", 36, "Paris Saint-Germain", "Argentina");
Messi.printDetails();

