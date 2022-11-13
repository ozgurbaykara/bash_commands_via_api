const {validationResult} = require('express-validator');
const {status} = require('../definition/http-status.definition');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(status.MISSING_PARAMETER)
            .json({
                errors: errors.array(),
                message: 'Missing parameter',
            });
    }
    return next();
};

module.exports = {
    validate
};
