import * as mongoose from 'mongoose';

export const api = 'projects';

export interface IProjects extends mongoose.Document {
    name: string;
    description: string;
    dateBeginning: Date;
    deadEnd: Date;
    dateFinish: Date;
    status: number;
}

const projectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 150,
    },
    description: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 500,
    },
    dateBeginning: {
        type: Date,
        required: true,        
    },
    deadEnd: {
        type: Date,
        required: true
    },
    dateFinish: {
        type: Date,
        required: false
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1, 2, 3]
    }
}, {
    timestamps: true
})

export const projects = mongoose.model<IProjects>(api, projectsSchema, api);