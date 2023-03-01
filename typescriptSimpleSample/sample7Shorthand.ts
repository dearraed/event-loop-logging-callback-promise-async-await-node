class Person3 {
    constructor(private readonly passportNumber: string){


    }
}

let person2 = new Person3("123456789");
console.log(person2);

//instead of
class Person4 {
    private readonly passportNumber: string;
    constructor(passportNumber: string){
        this.passportNumber = passportNumber;
} }

//When we add accessibility modifiers ( , , etc.) to our constructor parameters, 
//Typescript automatically declares a class member and assigns the parameters' value to it.
