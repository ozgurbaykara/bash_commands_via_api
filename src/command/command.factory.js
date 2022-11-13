const moment = require("moment-timezone");
const timezone = 'Europe/Moscow';

const time = moment().tz(timezone);
const commandService = require('./command.service');
const localFileLogService = require('../log/local-file-log.service');


class CommandLogFactory{
    /**
     *
     * @param {String} command
     * @param {Array} parameters
     * @param {String} user
     */
    make({command, parameters, user}){
        const t0 = performance.now();
        const {runCommand} = commandService.runCommand(
            command,
            parameters
        );
        const t1 = performance.now();
        const logText = `${runCommand} \t ${user} \t ${time} \t ${t1-t0} ms\n`;
        localFileLogService.logCommand(logText);
    }
}

module.exports.CommandLogFactory = new CommandLogFactory();
