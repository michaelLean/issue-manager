import * as mongoose from 'mongoose';
import * as user from './users';
import * as issue from './issues';

export const api = 'user-issues';

export interface IUserIssues extends mongoose.Document {
    userId: mongoose.Types.ObjectId | user.IUsers;
    issueId: mongoose.Types.ObjectId | issue.IIssues;
    dateBeginning: Date;
    dateFinish: Date;
    time: String;
}

const userIssuesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user.api,
        required: true
    },
    issueId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: issue.api,
        required: true
    },
    dateBeginning: {
        type: Date,
        required: true
    },
    dateFinish: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export const userIssues = mongoose.model<IUserIssues>(api, userIssuesSchema, api);