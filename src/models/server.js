const express = require ('express');
const cors = require ('cors');

const sequelize = require('../database/config');

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.apiPaths = {
            tasks: '/api/task',
        }

        this.dbConnection();
        this.middlewares();
        this.routes();

    }

    async dbConnection() {
        try {
            await sequelize.sync({ force: true }).then(() => {
                console.log('Database ready');
            });

        } catch (error) {
            throw new Error('Unable to connect to database', error ); 
        }
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes() {
        this.app.use(this.apiPaths.tasks, require('../routes/task') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( `Server running in port ${ this.port }` );
        });
    }

}

module.exports = Server;
