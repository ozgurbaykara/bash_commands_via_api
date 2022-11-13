const fs = require('fs');


/**
 * log text to log file
 * @param {String} logText
 */
exports.logCommand = (logText)=> {
    return fs.appendFile(process.env.LOGFILE_PATH, logText, function (err) {
        if (err) throw err;
    });
};
