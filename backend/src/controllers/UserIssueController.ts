import { Request, Response } from 'express';

class UserIssueController {
    public async index(req: Request, res: Response) {
        res.json(`Method GET not implemented yet in this URL`);
    }

    public async store(req: Request, res: Response) {
        res.json(`Method POST not implemented yet in this URL`);
    }
}

export const userIssueController = new UserIssueController();