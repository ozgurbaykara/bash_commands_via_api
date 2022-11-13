const {exec} = require('child_process');

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
};

module.exports = {
    runCommand
};
