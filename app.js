const application = require('./Application');

const server = application
    .enableCORS(3000)
    .initMainRouter()
    .listen();

module.exports = server;
