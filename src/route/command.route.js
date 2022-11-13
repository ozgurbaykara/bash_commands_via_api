const {authentication: authMw, validation: validationMw} = require('../middleware');
const commandController = require('../controller/command.controller');
const {command: commandValidator} = require('../validator');

module.exports = (app) => {
    app.post(
        '/run-command',
        authMw.auth,
        commandValidator.runCommand,
        validationMw.validate,
        commandController.runCommand
    );
}
