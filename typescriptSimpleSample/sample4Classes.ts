class Calculator {
    private result: number;
    constructor(){
        this.result = 0;
}
    add(x:number) {
        this.result += x;
}
    subtract(x:number) {
        this.result -= x;
}
    getResult():number {
        return this.result;
} }
// use it
let calculator = new Calculator();
calculator.add(10);
console.log(calculator.getResult()); 
calculator.subtract(9);
console.log(calculator.getResult()); //