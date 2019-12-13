import { Router } from 'express';
import { userController } from './controllers/UserController';
import { mainController } from './controllers/MainController';
import { userIssueController } from './controllers/UserIssueController';
import { issueController } from './controllers/IssueController';
import { projectController } from './controllers/ProjectController';

class Routes {
    public routes = Router();

    constructor() {
        this.initRoutes();
    }

    private initRoutes() {
        this.routes.get('/', mainController.index);
        this.routes.post('/', mainController.store);

        this.routes.get('/users', userController.index);
        this.routes.post('/users', userController.store);

        this.routes.get('/user/issues', userIssueController.index);
        this.routes.post('/user/issues', userIssueController.store);

        this.routes.get('/issues', issueController.index);
        this.routes.post('/issues', issueController.store);

        this.routes.get('/projects', projectController.index);
        this.routes.post('/projects', projectController.store);
    }
}

export const routes = new Routes().routes;