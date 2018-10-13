
//////////////////////Logging-start////////////////////////////
// { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
// { emerg: 0, alert: 1, crit: 2, error: 3, warning: 4, notice: 5, info: 6, debug: 7 }


const winston = require('winston');
const { format } = winston;
const { combine, timestamp, label } = format;
//var logLevel = getLogLevel();
const moment = require('moment');
//Set unhandeld exception behaviour
//winston.handleExceptions(new winston.transports.File({ filename: '/var/log/ft/exceptions.log' }));

//     new (winston.transports.Console)({ json: false, timestamp: function (){
// return moment.utc().format("YYYY-MM-DD HH:mm:ss.SSS");},level: logLevel, colorize:true }),

//var winston = new (winston.Logger)({
//    transports: [
//        new winston.transports.File({
//            filename: '/var/log/ft' + '/app.log', json: false,
//            json: false, timestamp: getLogTime, colorize: true, level: logLevel
//        }),
//        new (winston.transports.Console)({
//            json: false, timestamp: getLogTime, colorize: true, level: logLevel
//        })
//    ],
//    exceptionHandlers: [
//        new winston.transports.File({
//            filename: '/var/log/ft' + '/exceptions.log', json: false,
//            json: false, timestamp: getLogTime, colorize: true, level: logLevel
//        }),
//        new (winston.transports.Console)({
//            json: false, timestamp: getLogTime, colorize: true, level: logLevel
//        })
//    ],
//    exitOnError: false,
//});
// { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }

//Function to log messages.


function getTime() {
    //return moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss.SSS");
    return moment().utcOffset("+05:30").toISOString(true);
}

////Detect environment and set log level
//function getLogLevel() {
//    var logLevel;
//    if (process.env.NODE_ENV == 'production') {
//        logLevel = 'verbose';
//        // app.use(morgan('common', { skip: function (req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
//    } else {
//        logLevel = 'debug';
//        // app.use(morgan('dev', { skip: function (req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
//    }
//    return logLevel;
//}
// var pattern = winston.format.combine(
//   winston.format.colorize(),
//   winston.format.json(),
//    format.timestamp({
//      format: 'YYYY-MM-DD HH:mm:ss:SSS'
//     })
// );

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'c://pers//repo//error.log', level: 'error' }),
    new winston.transports.File({ filename: 'c://pers//repo//combined.log' })
  ]
});
// new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
// new winston.transports.File({ filename: 'logs/combined.log' })
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export default logger;
//////////////////////Logging-end////////////////////////////
