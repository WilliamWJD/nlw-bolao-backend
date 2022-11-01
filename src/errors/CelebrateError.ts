import { Request, Response, NextFunction } from 'express';
import { CelebrateError } from 'celebrate';

export function CelebrateErr(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof CelebrateError) {
        const errorBody = err.details.get('body');
        return res.status(400).json({
            message: errorBody?.message
        })
    }

    return res.status(500).json({
        status: 'Error',
        message: `Internal server error ${err.message}`
    })

}