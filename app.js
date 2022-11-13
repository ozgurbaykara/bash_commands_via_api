const application = require('./Application');

const server = application
    .validate()
    .enableCORS(process.env.SERVER_PORT || 3000)
    .initMainRouter()
    .listen();

module.exports = server;
