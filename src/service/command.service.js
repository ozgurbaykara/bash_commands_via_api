const moment = require('moment-timezone');
const fs = require('fs');
const {exec} = require('child_process');
const timezone = 'Europe/Moscow';

/**
 * log command, user, time, runTime info to logFile
 * @param {String} command
 * @param {String} user
 * @param {Number} runTime
 */
function logCommand({command, user, runTime}) {
    return fs.appendFile(process.env.LOGFILE_PATH, `${command} \t ${user} \t ${nowTime()} \t ${runTime} ms`, function (err) {
        if (err) throw err;
    });
}

function nowTime() {
    return moment()
        .tz(timezone)
        .format(null);
}

/**
 * execute command
 * @param {String} command
 * @param {Array} commandParameters
 * @param {String} user
 */
const runCommand = ({command, commandParameters, user}) => {
    // use node 16 performance.now for runtime
    const t0 = performance.now();
    const parameters = commandParameters.join(' ');
    // you can get the results with stdout but not necessary
    // if you want to see result type console.log(stdout) in callback function
    exec(`${command} ${parameters}`,function(err, stdout, stderr){
        if(err) throw err;
    });
    const t1 = performance.now();
    return logCommand({command: `${command} ${parameters}`, user, runTime: t1 - t0});
};

module.exports = {
    runCommand
};
