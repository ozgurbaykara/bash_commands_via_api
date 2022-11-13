const {CommandLogFactory} = require('../command/command.factory');
const {status} = require('../definition/http-status.definition');

const runCommand = async (req, res) => {
    const {command, parameters} = req.body;
    const {user} = req.data;
    try {
        CommandLogFactory.make({command, parameters, user});
        return res.status(status.NO_CONTENT).json();
    } catch (err) {
        console.log(err);
        return res.status(status.INTERVAL_SERVER_ERROR).json({
            message: 'Something wrong happened'
        });
    }
};

module.exports = {
    runCommand
};
