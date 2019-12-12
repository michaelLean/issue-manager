import { database } from './database';

class Server {    

    private async initServer() {

    }

    private async initDatabase() {
        await database.init();
    }

    public async bootstrap(): Promise<Server> {
        await this.initServer();
        await this.initDatabase();
        return this;
    }

}

export const server = new Server();