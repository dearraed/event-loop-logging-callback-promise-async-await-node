interface IUser {
    firstName: string;
    lastName: string;
}

// doesn't compile because firstName, LastName missing
//let me: IUser = {};
// works
let me: IUser = { firstName: 'Jon', lastName: 'Hilton' };
// doesn't compile because IUser has no an 'age' property
//me.age = 21;

console.log("me : ", me);
