class Salutations {
    static Mr(name: string){
        return "Mr " + name;
    }
    static Mrs(name: string){
        return "Mrs " + name;
} }
// hello Mr Brian Jones
console.log ('hello ' + Salutations.Mr('Brian Jones'));
// greetings Mrs Joy Smith
console.log ('greetings ' + Salutations.Mrs('Joy Smith'));

//Here we access the static members via the class name ( Salutations ) without having to create an instance of the class.