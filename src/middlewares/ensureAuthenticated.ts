import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
        throw Error("JWT Token is missing");
    }

    try {
        const decoded = verify(token, 'nlwcopa');

        const { sub } = decoded as TokenPayload;

        req.user = {
            id: sub
        }

        return next();
    } catch (error) {
        throw Error("Invalid JWT Token");
    }
}