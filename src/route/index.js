module.exports = (app)=>{
    exports.command = require('./command.route')(app)
};
