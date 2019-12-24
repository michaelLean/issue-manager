import { Request, Response } from 'express';

class MainController {
    public async index(req: Request, res: Response) {
        res.json(`Method GET not Allowed in this URL`);
    }

    public async store(req: Request, res: Response) {
        res.json(`Method POST not Allowed in this URL`);
    }
}

export const mainController = new MainController();