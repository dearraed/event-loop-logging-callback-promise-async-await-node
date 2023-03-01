function greetTheRoom(...names: string[]){
    console.log('hello ' + names.join(", "));
}
// 'hello Jon, Nick, Jane, Sam'
greetTheRoom('Jon', 'Nick', 'Jane', 'Sam');