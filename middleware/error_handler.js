const {logEvents} = require('./log_events');
const errorHandler = (err, res) => {
    logEvents(`${err.name}: ${err.message}`, 'errLog.txt')
    console.log(err.stack);
    res.status(500).send(err.message);
}
module.exports = errorHandler;

