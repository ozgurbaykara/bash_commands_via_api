const {exec} = require('child_process');

/**
 * execute command
 * @param {String} command
 * @param {Array} commandParameters
 */
const runCommand = (command, commandParameters)=> {
    if (command === 'rm') {
        throw new Error('rm cannot be executed');
    }
    const parameters = commandParameters.join(' ');
    const runCommand = `${command} ${parameters}`;
    exec(runCommand,function(err, stdout, stderr){
        if(err) throw err;
    });
    return {runCommand};
}

module.exports = {
    runCommand
};
