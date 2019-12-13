import * as express from 'express';
import * as bodyparser from 'body-parser';

import { database } from './database';
import { environment } from './config/environment';
import { routes } from './routes';

class Server {
    public app: express.Application;

    private async initServer() {
        this.app = express();
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: false }));
        this.app.use(routes);
        this.app.listen(environment.server.SERVER_PORT, () => {
            console.log(`Running on: http://localhost:${environment.server.SERVER_PORT}`)
        })
    }

    private async initDatabase() {
        await database.init();
    }

    public async init(): Promise<Server> {
        try {
            await this.initDatabase();
            await this.initServer();
            return this;
        } catch (error) {
            console.error(`Error starting server - ${error}`);
        }
    }

}

export const server = new Server();