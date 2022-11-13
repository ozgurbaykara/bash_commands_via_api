const {command: commandService} = require('../service');

const runCommand = async (req, res) => {
    const {command, parameters} = req.body;
    const {user} = req.data;
    try {
        commandService.runCommand({command, commandParameters: parameters, user});
        // return 204 no content
        return res.status(204).json();
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something wrong happened'
        });
    }
};

module.exports = {
    runCommand
};
