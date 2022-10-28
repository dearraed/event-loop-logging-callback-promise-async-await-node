// doesn't compile because firstName, LastName missing
//let me: IUser = {};
// works
var me = { firstName: 'Jon', lastName: 'Hilton' };
// doesn't compile because IUser has no an 'age' property
//me.age = 21;
console.log("me : ", me);
