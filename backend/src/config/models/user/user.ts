import { Schema, model, Document } from 'mongoose';

export const api = 'users';

export interface IUsers extends Document {
    username: string;
    password: string;
    status: number;
    email: string;
}

const userSchema = new Schema({
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
        enum: [0,1]
    },
    email: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export const user = model<IUsers>(api, userSchema, api);