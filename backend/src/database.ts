import * as mongoose from 'mongoose';

import { environment } from './config/environment';
import { email } from './utils/email';

class DataBase {
    private eventOnConnect() {
        mongoose.connection.on('connected', () => {
            var conn: any = mongoose.connections[0]
            console.log(`Database ${conn.name} connected on: ${conn.host}:${conn.port}`);
        });
    }

    private eventOnError() {
        mongoose.connection.on('error', (err: any) => {
            var conn: any = mongoose.connections[0]
            email.sendEmail(`Database ${conn.name} error: ${err}`);
        });
    }

    private async connect() {
        return mongoose.connect(environment.db.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    }

    public async init() {
        this.eventOnConnect();
        this.eventOnError();
        return await this.connect();        
    }
}

export const database = new DataBase;