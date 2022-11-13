const { body } = require('express-validator');

module.exports = {
    runCommand: [
        body('command')
            .exists()
            .withMessage('command is required')
            .trim()
            .not()
            .isEmpty()
            .withMessage('command cannot be empty')
            // donot allow rm command for safety reasons
            .custom((value)=> value !== 'rm')
            .withMessage('command cannot be rm bash command'),
        body('parameters')
            .exists()
            .withMessage('parameters is required')
            .isArray()
            .withMessage('parameters is not valid')
    ]
};
