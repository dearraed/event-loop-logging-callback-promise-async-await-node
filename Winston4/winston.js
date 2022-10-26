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

app.use( (req, res, done) => {
    logger.info(req.originalUrl);
    done();
});

app.get('/success', handler((req, res) => { res.send('Yay!'); }))
app.get('/error', handler((req, res) => { throw new Error('Doh!'); }))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))