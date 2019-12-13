import * as mongoose from 'mongoose';

export const api = 'users';

export interface IUsers extends mongoose.Document {
    username: string;
    password: string;
    status: number;
    email: string;
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1]
    },
    email: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export const user = mongoose.model<IUsers>(api, userSchema, api);