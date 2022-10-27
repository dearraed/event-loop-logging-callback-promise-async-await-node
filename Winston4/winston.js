const express = require('express');
const winston = require("winston");

const app = express();
const port = 3000;

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

const handler = (func) => (req, res) => {
    try {
        logger.info('server.handler.begun');
        func(req, res, logger);
    } catch(e){
        logger.info('server.handler.failed');
        res.send('Oh no, something did not go well!');
    }
};
//Log As an independent Middleware
app.use( (req, res, done) => {
    logger.info(req.originalUrl);
    done();
});

  function errorHandler  (error, request, response, next) {
    logger.info("catched error");
    // Error handling middleware functionality
    console.log( `error ${error.message}`) // log the error
    const status = error.status || 400
    // send back an easily understandable error message to the caller
    response.status(status).send({status: "fail", error: error.message})
  }



//Examples with a function Middleware
app.get('/success', handler((req, res) => { res.send('Yay!'); }))
//Example Witj a middleware Log
app.get('/error', (req, res) => { throw new Error('Doh!'); });
app.get('/testErrorMiddleware', handler((req, res) => {four(4).then(function(x) {res.send({"yes : ": x})}).catch(function(x){res.send({"no : ": x})}) }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(errorHandler);

function four (x) {
    return new Promise((resolve, reject) => {
      if (x > 5) {
        resolve(x);
      } else {
        reject(x);
      }
    });
  }