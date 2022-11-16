const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
  }, 1 * 1000);

});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The second promise has rejected');
      resolve('Failed');
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
  }, 3 * 1000);
});


  Promise.all([p1, p2, p3])
  .then(x => console.log("x : ", x)) // never execute
  .catch(y => console.log("y : ", y));
