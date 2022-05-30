const fs = require('fs');
const https = require('https');


function doSomething() {
    fs.readFile('./01.js', 'utf8', function (err, data) {
           console.log("file read");
      });

      setTimeout(function() {
          console.log("time fired")
      }, 100);

      https.get("https://www.google.com/", function(err, response, body) {
          console.log("http get finished");
      })

      console.log("READY");
}

doSomething();

console.log("AFTER");