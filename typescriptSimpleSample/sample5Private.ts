class Person {
    private passportNumber: string;
    constructor(passportNumber: string){
        this.passportNumber = passportNumber;
} }
let person = new Person("13252323223");
// error: passportNumber is private
console.log(person.passportNumber);