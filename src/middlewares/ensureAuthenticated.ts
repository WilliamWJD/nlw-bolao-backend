import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw Error("JWT Token is missing");
    }

    const [, token] = authHeader.split(' ');

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