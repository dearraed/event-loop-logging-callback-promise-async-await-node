const fetch = require("fetch").FetchStream;

function one (x) {
    console.log(x);
  }
  
  //one(1);
  function two (x, cb) {
    setTimeout(function () {
      console.log(x);
      cb(x, "param2");
    }, 1000);
  }
  /*two(2, function(x, param) {
      console.log("exec : ", x, " - param 2 : ", param);
  });*/

  function three (x) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(x);
      }, 1000);
    });
  }

  /*three(3)
  .then(function(x){
      console.log(x);
  });
  */

  function four (x) {
    return new Promise((resolve, reject) => {
      if (x > 5) {
        resolve(x);
      } else {
        reject(x);
      }
    });
  }

  /*four(5)
  .then(function(x){
      console.log("success : ", x);
  })
  .catch(function(x){
      console.log("error : ", x);
  })*/
  
  function five (x) {
    return Promise.reject(x);
  }

  /*five(8)
  .then(function (x){
      console.log(x);
  })*/
  
  function six (x) {
    return Promise.reject(x);
  }

  /*six(10)
  .catch(function (x){
      console.log(x);
  })*/
  
  function seven (x) {
    return five(x).then(console.log);
  }

  //seven(14);

  function eight (x) {
    return four(x)
      .then(
        console.log, //resolve case
        error => console.log('error', error) //reject case
      );
  }

 // eight(5);
  
  function nine (x) {
    return five(x)
      .then(
        () => { throw new Error('errorxx')},
        error => console.log('error', error)
      );
  }

  //nine(100);
  
  function ten (x) {
    return five(x)
      .then(() => { throw new Error('error')})
      .catch(error => console.log('error', error));
  }

  //ten(110);
  
  function eleven (x) {
    console.log(x);
    return new Promise((resolve, reject) => {
      resolve(x);
    });
  }

  /*eleven(120)
  .then(function(x){
      console.log("x = ", x);
  });
  */

  function twelve (x) {
    console.log(x);
    return new Promise((resolve, reject) => {
      if (x >= 2) {
        console.log('larger')
      } else {
        console.log('smaller');
      }
      resolve(x);
    });
  }
  
 /* twelve(130)
  .then(console.log);*/
  

  function thirteen (x) {
    return Promise
      .all([twelve(1), twelve(2)])
      .then(console.log);
  }

  //thirteen(2);
  
  function fourteen (x) {
    twelve(1).then(console.log);
    twelve(3).then(console.log);
  }
  //fourteen();

  function fifteen (x) {
    return Promise.resolve(
      Promise.resolve(
        Promise.resolve(
          Promise.resolve(1)
        )
      )
    ).then(console.log);
  }
  
//fifteen();

  function sixteen (x) {
    Promise
      .resolve(1)
      .then(x => { console.log(x); return x + 1; })
      .then(x => { console.log(x); throw x + 1; })
      .catch(x => { console.log(x); return x + 1; })
      .then(x => { console.log(x); return Promise.resolve(x + 1); })
      .then(x => { console.log(x); return Promise.reject(x + 1); })
      .catch(x => { console.log(x); })
  }

  //sixteen(5);
  
  async function seventeen (x) {
    return await Promise.resolve(1);
  }

  /*seventeen(10)
  .then(x => console.log("xxx : ", x))
  .catch(console.log);*/
  
  async function eighteen (x) {
    return await Promise.reject(1);
  }

  /*eighteen(10)
  .then(x => console.log("xxx : ", x))
  .catch(console.log);*/
  
  async function nineteen (x) {
    try {
      throw 1;
    } catch (e) {
      return 2;
    }
  }

  //console.log(nineteen(2).then(console.log).catch(x => console.log("ee : ", x)));
  
  async function twenty (x) {
    try {
      throw 1;
    } catch (e) {
      throw 2;
    }
  }

  //console.log(twenty(20));
  
  function twentyone (x) {
    let b = 0;
    return new Promise((resolve, reject) => {
      resolve(++b);
    });
  }

  /*twentyone()
  .then(console.log);*/
  //when declaring two times "x.then" it will be from the first result of x
  function twentytwo () {
    const x = twentyone();
    x.then(x => { console.log(x); return Promise.resolve(x + 1); })
    x.then(x => { console.log(x); return Promise.resolve(x + 1); })
  }

  twentytwo();


