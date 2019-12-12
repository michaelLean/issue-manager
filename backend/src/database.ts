import * as mongoose from 'mongoose';
import { environment } from './config/environment';
import { email } from './utils/email';

class DataBase {
    private onConnect() {
        mongoose.connection.on('connected', () => {
            var conn: any = mongoose.connections[0]
            console.log(`Mongoose default connection open to: ${conn.host}:${conn.port} --> ${conn.name}`);
        });
    }

    private onDisconnect() {
        mongoose.connection.on('disconnected', () => {
            email.sendEmail('Mongoose default connection disconnected');
        });
    }

    private onError() {
        mongoose.connection.on('error', (err: any) => {
            email.sendEmail('Mongoose default connection error: ' + err);
        });
    }

    private async connect(): Promise<any> {
        (<any>mongoose).Promise = global.Promise
        return mongoose.connect(environment.db.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    }

    public async init() {
        await this.connect();
        this.onConnect();
        this.onError();
        this.onDisconnect();
        return;
    }
}

export const database = new DataBase;