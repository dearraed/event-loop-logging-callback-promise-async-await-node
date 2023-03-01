class Person2 {
    private readonly passportNumber: string;
    constructor(passportNumber: string){
        this.passportNumber = passportNumber;
}
    changePassport(newNumber: number){
        // error: cannot assign to passportNumber because readonly
        this.passportNumber = newNumber;
} }