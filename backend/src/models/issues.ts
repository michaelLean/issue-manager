import * as mongoose from 'mongoose';
import * as project from './projects';

export const api = 'issues';

export interface IIssues extends mongoose.Document {
    name: string;
    description: string;
    dateBeginning: Date;
    deadEnd: Date;
    dateFinish: Date;
    status: number;
    projectId: mongoose.Types.ObjectId | project.IProjects;
}

const issuesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 500,
    },
    dateBeginning: {
        type: Date,
        required: true
    },
    deadEnd: {
        type: Date,
        required: true
    },
    dateFinish: {
        type: Date,
        required: true
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1, 2, 3]
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: project.api,
        required: true
    }
}, {
    timestamps: true
})

export const issues = mongoose.model<IIssues>(api, issuesSchema, api);