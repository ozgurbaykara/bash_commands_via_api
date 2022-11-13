const authentication = require('./authentication.middleware');
const validation = require('./validation.middleware');

module.exports = {
    authentication,
    validation
};
