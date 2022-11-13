// region imports
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser')
// endregion
const route = require('./src/route');

class Application {
    constructor() {
        this.app = express();
        this.mainRouter = express.Router();
        this.config();
    }

    config() {
        this.app.use(compression());
        this.app.disable('x-powered-by');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    listen(optionalPort = 3000) {
        const server = this.app.listen(process.env.SERVER_PORT || optionalPort, () => {
            const {address, port} = server.address();
            console.log('server listening at http://%s:%s', address, port);
        });
        return server;
    }

    enableCORS(port = 8080) {
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET');
            res.header('Access-Control-Allow-Origin', `http://localhost:${port}`);
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
        return this;
    }

    initMainRouter() {
        this.app.use('/v1', this.mainRouter);

        route(this.mainRouter);
        return this;
    }
    validate(){
        if(process.env.LOGFILE_PATH === ''){
            throw new Error('LOGFILE_PATH cannot be empty');
        }
        return this;
    }
}

module.exports = new Application();
