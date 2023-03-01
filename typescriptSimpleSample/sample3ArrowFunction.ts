let sayHello = () => console.log('hello');
// is equivalent to...
var sayHello2 = function () {
    return console.log('hello');
};

sayHello();

let sayHello3 = (name:string) => console.log(`hello ${name}`);
// is the same as...
var sayHello4 = function (name: string) {
    return console.log("hello " + name);
};

sayHello3("Raed");